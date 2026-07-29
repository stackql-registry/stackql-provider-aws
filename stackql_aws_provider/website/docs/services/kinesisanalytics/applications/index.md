--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - kinesisanalytics
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists an <code>applications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="applications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisanalytics.applications" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_application"
    values={[
        { label: 'describe_application', value: 'describe_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="describe_application">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>ARN of the application. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_code" /></td>
    <td><code>string</code></td>
    <td>Returns the application code that you provided to perform data analysis on any of the in-application streams in your application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_description" /></td>
    <td><code>string</code></td>
    <td>Description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>Name of the application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_status" /></td>
    <td><code>string</code></td>
    <td>Status of the application. (DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Provides the current application version.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_watch_logging_option_descriptions" /></td>
    <td><code>array</code></td>
    <td>Describes the CloudWatch log streams that are configured to receive application messages. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time stamp when the application version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="input_descriptions" /></td>
    <td><code>array</code></td>
    <td>Describes the application input configuration. For more information, see Configuring Application Input.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time stamp when the application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="output_descriptions" /></td>
    <td><code>array</code></td>
    <td>Describes the application output configuration. For more information, see Configuring Application Output.</td>
</tr>
<tr>
    <td><CopyableCode code="reference_data_source_descriptions" /></td>
    <td><code>array</code></td>
    <td>Describes reference data sources configured for the application. For more information, see Configuring Application Input.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_applications">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="application_summaries" /></td>
    <td><code>array</code></td>
    <td>List of ApplicationSummary objects.</td>
</tr>
<tr>
    <td><CopyableCode code="has_more_applications" /></td>
    <td><code>boolean</code></td>
    <td>Returns true if there are more applications to retrieve.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_application"><CopyableCode code="describe_application" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Returns information about a specific Amazon Kinesis Analytics application. If you want to retrieve a list of all applications in your account, use the ListApplications operation. This operation requires permissions to perform the kinesisanalytics:DescribeApplication action. You can use DescribeApplication to get the current application versionId, which you need to call other operations such as Update.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the HasMoreApplications value as true, you can send another request by adding the ExclusiveStartApplicationName in the request body, and set the value of this to the last application name from the previous response. If you want detailed information about a specific application, use DescribeApplication. This operation requires permissions to perform the kinesisanalytics:ListApplications action.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see How it Works. In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source. Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps. In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations. To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the kinesisanalytics:CreateApplication action. For introductory exercises to create an Amazon Kinesis Analytics application, see Getting Started.</td>
</tr>
<tr>
    <td><a href="#add_application_input_processing_configuration"><CopyableCode code="add_application_input_processing_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-InputId"><code>InputId</code></a>, <a href="#parameter-InputProcessingConfiguration"><code>InputProcessingConfiguration</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds an InputProcessingConfiguration to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is AWS Lambda.</td>
</tr>
<tr>
    <td><a href="#add_application_cloud_watch_logging_option"><CopyableCode code="add_application_cloud_watch_logging_option" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-CloudWatchLoggingOption"><code>CloudWatchLoggingOption</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><a href="#add_application_input"><CopyableCode code="add_application_input" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-Input"><code>Input</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds a streaming source to your Amazon Kinesis application. For conceptual information, see Configuring Application Input. You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see CreateApplication. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version. This operation requires permissions to perform the kinesisanalytics:AddApplicationInput action.</td>
</tr>
<tr>
    <td><a href="#add_application_output"><CopyableCode code="add_application_output" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-Output"><code>Output</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds an external destination to your Amazon Kinesis Analytics application. If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination. You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see Understanding Application Output (Destination). Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version. For the limits on the number of application inputs and outputs you can configure, see Limits. This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action.</td>
</tr>
<tr>
    <td><a href="#add_application_reference_data_source"><CopyableCode code="add_application_reference_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-ReferenceDataSource"><code>ReferenceDataSource</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds a reference data source to an existing application. Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table. For conceptual information, see Configuring Application Input. For the limits on data sources you can add to your application, see Limits. This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-ApplicationUpdate"><code>ApplicationUpdate</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. Note that Amazon Kinesis Analytics updates the CurrentApplicationVersionId each time you update your application. This operation requires permission for the kinesisanalytics:UpdateApplication action.</td>
</tr>
<tr>
    <td><a href="#delete_application_cloud_watch_logging_option"><CopyableCode code="delete_application_cloud_watch_logging_option" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.</td>
</tr>
<tr>
    <td><a href="#delete_application_input_processing_configuration"><CopyableCode code="delete_application_input_processing_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes an InputProcessingConfiguration from an input.</td>
</tr>
<tr>
    <td><a href="#delete_application_output"><CopyableCode code="delete_application_output" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination. This operation requires permissions to perform the kinesisanalytics:DeleteApplicationOutput action.</td>
</tr>
<tr>
    <td><a href="#delete_application_reference_data_source"><CopyableCode code="delete_application_reference_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes a reference data source configuration from the specified application configuration. If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the AddApplicationReferenceDataSource operation. This operation requires permissions to perform the kinesisanalytics.DeleteApplicationReferenceDataSource action.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code). This operation requires permissions to perform the kinesisanalytics:DeleteApplication action.</td>
</tr>
<tr>
    <td><a href="#start_application"><CopyableCode code="start_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-InputConfigurations"><code>InputConfigurations</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application. After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination. The application status must be READY for you to start an application. You can get the application status in the console or using the DescribeApplication operation. After you start the application, you can stop the application from processing the input by calling the StopApplication operation. This operation requires permissions to perform the kinesisanalytics:StartApplication action.</td>
</tr>
<tr>
    <td><a href="#stop_application"><CopyableCode code="stop_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a></td>
    <td></td>
    <td>This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the DescribeApplication operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. This operation requires permissions to perform the kinesisanalytics:StopApplication action.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_application"
    values={[
        { label: 'describe_application', value: 'describe_application' },
        { label: 'list_applications', value: 'list_applications' }
    ]}
>
<TabItem value="describe_application">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Returns information about a specific Amazon Kinesis Analytics application. If you want to retrieve a list of all applications in your account, use the ListApplications operation. This operation requires permissions to perform the kinesisanalytics:DescribeApplication action. You can use DescribeApplication to get the current application versionId, which you need to call other operations such as Update.

```sql
SELECT
application_arn,
application_code,
application_description,
application_name,
application_status,
application_version_id,
cloud_watch_logging_option_descriptions,
create_timestamp,
input_descriptions,
last_update_timestamp,
output_descriptions,
reference_data_source_descriptions
FROM aws.kinesisanalytics.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Returns a list of Amazon Kinesis Analytics applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If the response returns the HasMoreApplications value as true, you can send another request by adding the ExclusiveStartApplicationName in the request body, and set the value of this to the last application name from the previous response. If you want detailed information about a specific application, use DescribeApplication. This operation requires permissions to perform the kinesisanalytics:ListApplications action.

```sql
SELECT
application_summaries,
has_more_applications
FROM aws.kinesisanalytics.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_application"
    values={[
        { label: 'create_application', value: 'create_application' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Creates an Amazon Kinesis Analytics application. You can configure each application with one streaming source as input, application code to process the input, and up to three destinations where you want Amazon Kinesis Analytics to write the output data from your application. For an overview, see How it Works. In the input configuration, you map the streaming source to an in-application stream, which you can think of as a constantly updating table. In the mapping, you must provide a schema for the in-application stream and map each data column in the in-application stream to a data element in the streaming source. Your application code is one or more SQL statements that read input data, transform it, and generate output. Your application code can create one or more SQL artifacts like SQL streams or pumps. In the output configuration, you can configure the application to write data from in-application streams created in your applications to up to three destinations. To read data from your source stream or write data to destination streams, Amazon Kinesis Analytics needs your permissions. You grant these permissions by creating IAM roles. This operation requires permissions to perform the kinesisanalytics:CreateApplication action. For introductory exercises to create an Amazon Kinesis Analytics application, see Getting Started.

```sql
INSERT INTO aws.kinesisanalytics.applications (
ApplicationName,
ApplicationDescription,
Inputs,
Outputs,
CloudWatchLoggingOptions,
ApplicationCode,
Tags,
region
)
SELECT 
'{{ ApplicationName }}' /* required */,
'{{ ApplicationDescription }}',
'{{ Inputs }}',
'{{ Outputs }}',
'{{ CloudWatchLoggingOptions }}',
'{{ ApplicationCode }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
application_summary
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: applications
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the applications resource.
    - name: ApplicationName
      value: "{{ ApplicationName }}"
      description: |
        Name of your Amazon Kinesis Analytics application (for example, sample-app).
    - name: ApplicationDescription
      value: "{{ ApplicationDescription }}"
      description: |
        Summary description of the application.
    - name: Inputs
      description: |
        Use this parameter to configure the application input. You can configure your application to receive input from a single streaming source. In this configuration, you map this streaming source to an in-application stream that is created. Your application code can then query the in-application stream like a table (you can think of it as a constantly updating table). For the streaming source, you provide its Amazon Resource Name (ARN) and format of data on the stream (for example, JSON, CSV, etc.). You also must provide an IAM role that Amazon Kinesis Analytics can assume to read this stream on your behalf. To create the in-application stream, you need to specify a schema to transform your data into a schematized version used in SQL. In the schema, you provide the necessary mapping of the data elements in the streaming source to record columns in the in-app stream.
      value:
        - NamePrefix: "{{ NamePrefix }}"
          InputProcessingConfiguration:
            InputLambdaProcessor:
              ResourceARN: "{{ ResourceARN }}"
              RoleARN: "{{ RoleARN }}"
          KinesisStreamsInput:
            ResourceARN: "{{ ResourceARN }}"
            RoleARN: "{{ RoleARN }}"
          KinesisFirehoseInput:
            ResourceARN: "{{ ResourceARN }}"
            RoleARN: "{{ RoleARN }}"
          InputParallelism:
            Count: {{ Count }}
          InputSchema:
            RecordFormat:
              RecordFormatType: "{{ RecordFormatType }}"
              MappingParameters:
                JSONMappingParameters:
                  RecordRowPath: "{{ RecordRowPath }}"
                CSVMappingParameters:
                  RecordRowDelimiter: "{{ RecordRowDelimiter }}"
                  RecordColumnDelimiter: "{{ RecordColumnDelimiter }}"
            RecordEncoding: "{{ RecordEncoding }}"
            RecordColumns:
              - Name: "{{ Name }}"
                Mapping: "{{ Mapping }}"
                SqlType: "{{ SqlType }}"
    - name: Outputs
      description: |
        You can configure application output to write data from any of the in-application streams to up to three destinations. These destinations can be Amazon Kinesis streams, Amazon Kinesis Firehose delivery streams, AWS Lambda destinations, or any combination of the three. In the configuration, you specify the in-application stream name, the destination stream or Lambda function Amazon Resource Name (ARN), and the format to use when writing data. You must also provide an IAM role that Amazon Kinesis Analytics can assume to write to the destination stream or Lambda function on your behalf. In the output configuration, you also provide the output stream or Lambda function ARN. For stream destinations, you provide the format of data in the stream (for example, JSON, CSV). You also must provide an IAM role that Amazon Kinesis Analytics can assume to write to the stream or Lambda function on your behalf.
      value:
        - Name: "{{ Name }}"
          KinesisStreamsOutput:
            ResourceARN: "{{ ResourceARN }}"
            RoleARN: "{{ RoleARN }}"
          KinesisFirehoseOutput:
            ResourceARN: "{{ ResourceARN }}"
            RoleARN: "{{ RoleARN }}"
          LambdaOutput:
            ResourceARN: "{{ ResourceARN }}"
            RoleARN: "{{ RoleARN }}"
          DestinationSchema:
            RecordFormatType: "{{ RecordFormatType }}"
    - name: CloudWatchLoggingOptions
      description: |
        Use this parameter to configure a CloudWatch log stream to monitor application configuration errors. For more information, see Working with Amazon CloudWatch Logs.
      value:
        - LogStreamARN: "{{ LogStreamARN }}"
          RoleARN: "{{ RoleARN }}"
    - name: ApplicationCode
      value: "{{ ApplicationCode }}"
      description: |
        One or more SQL statements that read input data, transform it, and generate output. For example, you can write a SQL statement that reads data from one in-application stream, generates a running average of the number of advertisement clicks by vendor, and insert resulting rows in another in-application stream using pumps. For more information about the typical pattern, see Application Code. You can provide such series of SQL statements, where output of one statement can be used as the input for the next statement. You store intermediate results by creating in-application streams and pumps. Note that the application code must create the streams with names specified in the Outputs. For example, if your Outputs defines output streams named ExampleOutputStream1 and ExampleOutputStream2, then your application code must create these streams.
    - name: Tags
      description: |
        A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see Using Tagging.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_application_input_processing_configuration"
    values={[
        { label: 'add_application_input_processing_configuration', value: 'add_application_input_processing_configuration' },
        { label: 'add_application_cloud_watch_logging_option', value: 'add_application_cloud_watch_logging_option' },
        { label: 'add_application_input', value: 'add_application_input' },
        { label: 'add_application_output', value: 'add_application_output' },
        { label: 'add_application_reference_data_source', value: 'add_application_reference_data_source' },
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="add_application_input_processing_configuration">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds an InputProcessingConfiguration to an application. An input processor preprocesses records on the input stream before the application's SQL code executes. Currently, the only input processor available is AWS Lambda.

```sql
UPDATE aws.kinesisanalytics.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
InputId = '{{ InputId }}',
InputProcessingConfiguration = '{{ InputProcessingConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND InputId = '{{ InputId }}' --required
AND InputProcessingConfiguration = '{{ InputProcessingConfiguration }}' --required;
```
</TabItem>
<TabItem value="add_application_cloud_watch_logging_option">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds a CloudWatch log stream to monitor application configuration errors. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.

```sql
UPDATE aws.kinesisanalytics.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
CloudWatchLoggingOption = '{{ CloudWatchLoggingOption }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND CloudWatchLoggingOption = '{{ CloudWatchLoggingOption }}' --required;
```
</TabItem>
<TabItem value="add_application_input">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds a streaming source to your Amazon Kinesis application. For conceptual information, see Configuring Application Input. You can add a streaming source either when you create an application or you can use this operation to add a streaming source after you create an application. For more information, see CreateApplication. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version. This operation requires permissions to perform the kinesisanalytics:AddApplicationInput action.

```sql
UPDATE aws.kinesisanalytics.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
Input = '{{ Input }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND Input = '{{ Input }}' --required;
```
</TabItem>
<TabItem value="add_application_output">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds an external destination to your Amazon Kinesis Analytics application. If you want Amazon Kinesis Analytics to deliver data from an in-application stream within your application to an external destination (such as an Amazon Kinesis stream, an Amazon Kinesis Firehose delivery stream, or an AWS Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination. You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. For more information, see Understanding Application Output (Destination). Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version. For the limits on the number of application inputs and outputs you can configure, see Limits. This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action.

```sql
UPDATE aws.kinesisanalytics.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
Output = '{{ Output }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND Output = '{{ Output }}' --required;
```
</TabItem>
<TabItem value="add_application_reference_data_source">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Adds a reference data source to an existing application. Amazon Kinesis Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in Amazon S3 object maps to columns in the resulting in-application table. For conceptual information, see Configuring Application Input. For the limits on data sources you can add to your application, see Limits. This operation requires permissions to perform the kinesisanalytics:AddApplicationOutput action.

```sql
UPDATE aws.kinesisanalytics.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
ReferenceDataSource = '{{ ReferenceDataSource }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND ReferenceDataSource = '{{ ReferenceDataSource }}' --required;
```
</TabItem>
<TabItem value="update_application">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Updates an existing Amazon Kinesis Analytics application. Using this API, you can update application code, input configuration, and output configuration. Note that Amazon Kinesis Analytics updates the CurrentApplicationVersionId each time you update your application. This operation requires permission for the kinesisanalytics:UpdateApplication action.

```sql
UPDATE aws.kinesisanalytics.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
ApplicationUpdate = '{{ ApplicationUpdate }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND ApplicationUpdate = '{{ ApplicationUpdate }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_cloud_watch_logging_option"
    values={[
        { label: 'delete_application_cloud_watch_logging_option', value: 'delete_application_cloud_watch_logging_option' },
        { label: 'delete_application_input_processing_configuration', value: 'delete_application_input_processing_configuration' },
        { label: 'delete_application_output', value: 'delete_application_output' },
        { label: 'delete_application_reference_data_source', value: 'delete_application_reference_data_source' },
        { label: 'delete_application', value: 'delete_application' }
    ]}
>
<TabItem value="delete_application_cloud_watch_logging_option">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes a CloudWatch log stream from an application. For more information about using CloudWatch log streams with Amazon Kinesis Analytics applications, see Working with Amazon CloudWatch Logs.

```sql
DELETE FROM aws.kinesisanalytics.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application_input_processing_configuration">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes an InputProcessingConfiguration from an input.

```sql
DELETE FROM aws.kinesisanalytics.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application_output">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes output destination configuration from your application configuration. Amazon Kinesis Analytics will no longer write data from the corresponding in-application stream to the external output destination. This operation requires permissions to perform the kinesisanalytics:DeleteApplicationOutput action.

```sql
DELETE FROM aws.kinesisanalytics.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application_reference_data_source">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes a reference data source configuration from the specified application configuration. If the application is running, Amazon Kinesis Analytics immediately removes the in-application table that you created using the AddApplicationReferenceDataSource operation. This operation requires permissions to perform the kinesisanalytics.DeleteApplicationReferenceDataSource action.

```sql
DELETE FROM aws.kinesisanalytics.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Deletes the specified application. Amazon Kinesis Analytics halts application execution and deletes the application, including any application artifacts (such as in-application streams, reference table, and application code). This operation requires permissions to perform the kinesisanalytics:DeleteApplication action.

```sql
DELETE FROM aws.kinesisanalytics.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_application"
    values={[
        { label: 'start_application', value: 'start_application' },
        { label: 'stop_application', value: 'stop_application' }
    ]}
>
<TabItem value="start_application">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Starts the specified Amazon Kinesis Analytics application. After creating an application, you must exclusively call this operation to start your application. After the application starts, it begins consuming the input data, processes it, and writes the output to the configured destination. The application status must be READY for you to start an application. You can get the application status in the console or using the DescribeApplication operation. After you start the application, you can stop the application from processing the input by calling the StopApplication operation. This operation requires permissions to perform the kinesisanalytics:StartApplication action.

```sql
EXEC aws.kinesisanalytics.applications.start_application 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationName": "{{ ApplicationName }}", 
"InputConfigurations": "{{ InputConfigurations }}"
}'
;
```
</TabItem>
<TabItem value="stop_application">

This documentation is for version 1 of the Amazon Kinesis Data Analytics API, which only supports SQL applications. Version 2 of the API supports SQL and Java applications. For more information about version 2, see Amazon Kinesis Data Analytics API V2 Documentation. Stops the application from processing input data. You can stop an application only if it is in the running state. You can use the DescribeApplication operation to find the application state. After the application is stopped, Amazon Kinesis Analytics stops reading data from the input, the application stops processing data, and there is no output written to the destination. This operation requires permissions to perform the kinesisanalytics:StopApplication action.

```sql
EXEC aws.kinesisanalytics.applications.stop_application 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationName": "{{ ApplicationName }}"
}'
;
```
</TabItem>
</Tabs>
