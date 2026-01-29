resource "aws_ecr_repository" "api_repo" {
  name = "projeto-exemplo-repo"
}

resource "aws_lambda_function" "api_data" {
  function_name = "api-data-aula"
  role          = aws_iam_role.iam_for_lambda.arn
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.api_repo.repository_url}:latest"
}

resource "aws_lambda_function_url" "api_url" {
  function_name      = aws_lambda_function.api_data.function_name
  authorization_type = "NONE"
}