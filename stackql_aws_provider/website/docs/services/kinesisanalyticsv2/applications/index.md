--- 
title: applications
hide_title: false
hide_table_of_contents: false
keywords:
  - applications
  - kinesisanalyticsv2
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kinesisanalyticsv2.applications" /></td></tr>
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
    <td>The ARN of the application. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_configuration_description" /></td>
    <td><code>object</code></td>
    <td>Describes details about the application code and starting parameters for a Managed Service for Apache Flink application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_description" /></td>
    <td><code>string</code></td>
    <td>The description of the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_maintenance_configuration_description" /></td>
    <td><code>object</code></td>
    <td>The details of the maintenance configuration for the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_mode" /></td>
    <td><code>string</code></td>
    <td>To create a Managed Service for Apache Flink Studio notebook, you must set the mode to INTERACTIVE. However, for a Managed Service for Apache Flink application, the mode is optional. (STREAMING, INTERACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_status" /></td>
    <td><code>string</code></td>
    <td>The status of the application. (DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING, AUTOSCALING, FORCE_STOPPING, ROLLING_BACK, MAINTENANCE, ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp that indicates when the application version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Provides the current application version. Managed Service for Apache Flink updates the ApplicationVersionId each time you update the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_rolled_back_from" /></td>
    <td><code>integer (int64)</code></td>
    <td>If you reverted the application using RollbackApplication, the application version when RollbackApplication was called.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_rolled_back_to" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version to which you want to roll back the application.</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_updated_from" /></td>
    <td><code>integer (int64)</code></td>
    <td>The previous application version before the latest application update. RollbackApplication reverts the application to this version.</td>
</tr>
<tr>
    <td><CopyableCode code="cloud_watch_logging_option_descriptions" /></td>
    <td><code>array</code></td>
    <td>Describes the application Amazon CloudWatch logging options.</td>
</tr>
<tr>
    <td><CopyableCode code="conditional_token" /></td>
    <td><code>string</code></td>
    <td>A value you use to implement strong concurrency for application updates. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-_+/=&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="create_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The current timestamp when the application was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The current timestamp when the application was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_environment" /></td>
    <td><code>string</code></td>
    <td>The runtime environment for the application. (SQL-1_0, FLINK-1_6, FLINK-1_8, ZEPPELIN-FLINK-1_0, FLINK-1_11, FLINK-1_13, ZEPPELIN-FLINK-2_0, FLINK-1_15, ZEPPELIN-FLINK-3_0, FLINK-1_18, FLINK-1_19, FLINK-1_20, FLINK-2_2, FLINK-2_3)</td>
</tr>
<tr>
    <td><CopyableCode code="service_execution_role" /></td>
    <td><code>string</code></td>
    <td>Specifies the IAM role that the application uses to access external resources. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
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
    <td><CopyableCode code="application_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the application. (pattern: &lt;code&gt;arn:.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_mode" /></td>
    <td><code>string</code></td>
    <td>For a Managed Service for Apache Flink application, the mode is STREAMING. For a Managed Service for Apache Flink Studio notebook, it is INTERACTIVE. (STREAMING, INTERACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>The name of the application. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="application_status" /></td>
    <td><code>string</code></td>
    <td>The status of the application. (DELETING, STARTING, STOPPING, READY, RUNNING, UPDATING, AUTOSCALING, FORCE_STOPPING, ROLLING_BACK, MAINTENANCE, ROLLED_BACK)</td>
</tr>
<tr>
    <td><CopyableCode code="application_version_id" /></td>
    <td><code>integer (int64)</code></td>
    <td>Provides the current application version.</td>
</tr>
<tr>
    <td><CopyableCode code="runtime_environment" /></td>
    <td><code>string</code></td>
    <td>The runtime environment for the application. (SQL-1_0, FLINK-1_6, FLINK-1_8, ZEPPELIN-FLINK-1_0, FLINK-1_11, FLINK-1_13, ZEPPELIN-FLINK-2_0, FLINK-1_15, ZEPPELIN-FLINK-3_0, FLINK-1_18, FLINK-1_19, FLINK-1_20, FLINK-2_2, FLINK-2_3)</td>
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
    <td>Returns information about a specific Managed Service for Apache Flink application. If you want to retrieve a list of all applications in your account, use the ListApplications operation.</td>
</tr>
<tr>
    <td><a href="#list_applications"><CopyableCode code="list_applications" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Managed Service for Apache Flink applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If you want detailed information about a specific application, use DescribeApplication.</td>
</tr>
<tr>
    <td><a href="#create_application"><CopyableCode code="create_application" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-RuntimeEnvironment"><code>RuntimeEnvironment</code></a>, <a href="#parameter-ServiceExecutionRole"><code>ServiceExecutionRole</code></a></td>
    <td></td>
    <td>Creates a Managed Service for Apache Flink application. For information about creating a Managed Service for Apache Flink application, see Creating an Application.</td>
</tr>
<tr>
    <td><a href="#create_application_presigned_url"><CopyableCode code="create_application_presigned_url" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-UrlType"><code>UrlType</code></a></td>
    <td></td>
    <td>Creates and returns a URL that you can use to connect to an application's extension. The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. You control the amount of time that the URL will be valid using the SessionExpirationDurationInSeconds parameter. If you do not provide this parameter, the returned URL is valid for twelve hours. The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.</td>
</tr>
<tr>
    <td><a href="#add_application_input_processing_configuration"><CopyableCode code="add_application_input_processing_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-InputId"><code>InputId</code></a>, <a href="#parameter-InputProcessingConfiguration"><code>InputProcessingConfiguration</code></a></td>
    <td></td>
    <td>Adds an InputProcessingConfiguration to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is Amazon Lambda.</td>
</tr>
<tr>
    <td><a href="#add_application_input"><CopyableCode code="add_application_input" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-Input"><code>Input</code></a></td>
    <td></td>
    <td>Adds a streaming source to your SQL-based Kinesis Data Analytics application. You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see CreateApplication. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version.</td>
</tr>
<tr>
    <td><a href="#add_application_output"><CopyableCode code="add_application_output" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-Output"><code>Output</code></a></td>
    <td></td>
    <td>Adds an external destination to your SQL-based Kinesis Data Analytics application. If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination. You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version.</td>
</tr>
<tr>
    <td><a href="#add_application_reference_data_source"><CopyableCode code="add_application_reference_data_source" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a>, <a href="#parameter-ReferenceDataSource"><code>ReferenceDataSource</code></a></td>
    <td></td>
    <td>Adds a reference data source to an existing SQL-based Kinesis Data Analytics application. Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.</td>
</tr>
<tr>
    <td><a href="#add_application_cloud_watch_logging_option"><CopyableCode code="add_application_cloud_watch_logging_option" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CloudWatchLoggingOption"><code>CloudWatchLoggingOption</code></a></td>
    <td></td>
    <td>Adds an Amazon CloudWatch log stream to monitor application configuration errors.</td>
</tr>
<tr>
    <td><a href="#add_application_vpc_configuration"><CopyableCode code="add_application_vpc_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-VpcConfiguration"><code>VpcConfiguration</code></a></td>
    <td></td>
    <td>Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely. Note the following about VPC configurations for Managed Service for Apache Flink applications: VPC configurations are not supported for SQL applications. When a VPC is added to a Managed Service for Apache Flink application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.</td>
</tr>
<tr>
    <td><a href="#update_application_maintenance_configuration"><CopyableCode code="update_application_maintenance_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-ApplicationMaintenanceConfigurationUpdate"><code>ApplicationMaintenanceConfigurationUpdate</code></a></td>
    <td></td>
    <td>Updates the maintenance configuration of the Managed Service for Apache Flink application. You can invoke this operation on an application that is in one of the two following states: READY or RUNNING. If you invoke it when the application is in a state other than these two states, it throws a ResourceInUseException. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead. To see the current maintenance configuration of your application, invoke the DescribeApplication operation. For information about application maintenance, see Managed Service for Apache Flink for Apache Flink Maintenance. This operation is supported only for Managed Service for Apache Flink.</td>
</tr>
<tr>
    <td><a href="#update_application"><CopyableCode code="update_application" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a></td>
    <td></td>
    <td>Updates an existing Managed Service for Apache Flink application. Using this operation, you can update application code, input configuration, and output configuration. Managed Service for Apache Flink updates the ApplicationVersionId each time you update your application.</td>
</tr>
<tr>
    <td><a href="#delete_application_input_processing_configuration"><CopyableCode code="delete_application_input_processing_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an InputProcessingConfiguration from an input.</td>
</tr>
<tr>
    <td><a href="#delete_application_output"><CopyableCode code="delete_application_output" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.</td>
</tr>
<tr>
    <td><a href="#delete_application_reference_data_source"><CopyableCode code="delete_application_reference_data_source" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration. If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the AddApplicationReferenceDataSource operation.</td>
</tr>
<tr>
    <td><a href="#delete_application"><CopyableCode code="delete_application" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified application. Managed Service for Apache Flink halts application execution and deletes the application.</td>
</tr>
<tr>
    <td><a href="#delete_application_cloud_watch_logging_option"><CopyableCode code="delete_application_cloud_watch_logging_option" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon CloudWatch log stream from an SQL-based Kinesis Data Analytics application.</td>
</tr>
<tr>
    <td><a href="#delete_application_vpc_configuration"><CopyableCode code="delete_application_vpc_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a VPC configuration from a Managed Service for Apache Flink application.</td>
</tr>
<tr>
    <td><a href="#rollback_application"><CopyableCode code="rollback_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-CurrentApplicationVersionId"><code>CurrentApplicationVersionId</code></a></td>
    <td></td>
    <td>Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status or in the running status. You can roll back an application only if it is in the UPDATING, AUTOSCALING, or RUNNING statuses. When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Managed Service for Apache Flink rejects the rollback request.</td>
</tr>
<tr>
    <td><a href="#start_application"><CopyableCode code="start_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a></td>
    <td></td>
    <td>Starts the specified Managed Service for Apache Flink application. After creating an application, you must exclusively call this operation to start your application.</td>
</tr>
<tr>
    <td><a href="#stop_application"><CopyableCode code="stop_application" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ApplicationName"><code>ApplicationName</code></a></td>
    <td></td>
    <td>Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the Force parameter to true. You can use the DescribeApplication operation to find the application status. Managed Service for Apache Flink takes a snapshot when the application is stopped, unless Force is set to true.</td>
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

Returns information about a specific Managed Service for Apache Flink application. If you want to retrieve a list of all applications in your account, use the ListApplications operation.

```sql
SELECT
application_arn,
application_configuration_description,
application_description,
application_maintenance_configuration_description,
application_mode,
application_name,
application_status,
application_version_create_timestamp,
application_version_id,
application_version_rolled_back_from,
application_version_rolled_back_to,
application_version_updated_from,
cloud_watch_logging_option_descriptions,
conditional_token,
create_timestamp,
last_update_timestamp,
runtime_environment,
service_execution_role
FROM aws.kinesisanalyticsv2.applications
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_applications">

Returns a list of Managed Service for Apache Flink applications in your account. For each application, the response includes the application name, Amazon Resource Name (ARN), and status. If you want detailed information about a specific application, use DescribeApplication.

```sql
SELECT
application_arn,
application_mode,
application_name,
application_status,
application_version_id,
runtime_environment
FROM aws.kinesisanalyticsv2.applications
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
        { label: 'create_application_presigned_url', value: 'create_application_presigned_url' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_application">

Creates a Managed Service for Apache Flink application. For information about creating a Managed Service for Apache Flink application, see Creating an Application.

```sql
INSERT INTO aws.kinesisanalyticsv2.applications (
ApplicationName,
ApplicationDescription,
RuntimeEnvironment,
ServiceExecutionRole,
ApplicationConfiguration,
CloudWatchLoggingOptions,
Tags,
ApplicationMode,
region
)
SELECT 
'{{ ApplicationName }}' /* required */,
'{{ ApplicationDescription }}',
'{{ RuntimeEnvironment }}' /* required */,
'{{ ServiceExecutionRole }}' /* required */,
'{{ ApplicationConfiguration }}',
'{{ CloudWatchLoggingOptions }}',
'{{ Tags }}',
'{{ ApplicationMode }}',
'{{ region }}'
RETURNING
application_detail
;
```
</TabItem>
<TabItem value="create_application_presigned_url">

Creates and returns a URL that you can use to connect to an application's extension. The IAM role or user used to call this API defines the permissions to access the extension. After the presigned URL is created, no additional permission is required to access this URL. IAM authorization policies for this API are also enforced for every HTTP request that attempts to connect to the extension. You control the amount of time that the URL will be valid using the SessionExpirationDurationInSeconds parameter. If you do not provide this parameter, the returned URL is valid for twelve hours. The URL that you get from a call to CreateApplicationPresignedUrl must be used within 3 minutes to be valid. If you first try to use the URL after the 3-minute limit expires, the service returns an HTTP 403 Forbidden error.

```sql
INSERT INTO aws.kinesisanalyticsv2.applications (
ApplicationName,
UrlType,
SessionExpirationDurationInSeconds,
region
)
SELECT 
'{{ ApplicationName }}' /* required */,
'{{ UrlType }}' /* required */,
{{ SessionExpirationDurationInSeconds }},
'{{ region }}'
RETURNING
authorized_url
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
        The name of the application.
    - name: ApplicationDescription
      value: "{{ ApplicationDescription }}"
      description: |
        A summary description of the application.
    - name: RuntimeEnvironment
      value: "{{ RuntimeEnvironment }}"
      description: |
        The runtime environment for the application.
      valid_values: ['SQL-1_0', 'FLINK-1_6', 'FLINK-1_8', 'ZEPPELIN-FLINK-1_0', 'FLINK-1_11', 'FLINK-1_13', 'ZEPPELIN-FLINK-2_0', 'FLINK-1_15', 'ZEPPELIN-FLINK-3_0', 'FLINK-1_18', 'FLINK-1_19', 'FLINK-1_20', 'FLINK-2_2', 'FLINK-2_3']
    - name: ServiceExecutionRole
      value: "{{ ServiceExecutionRole }}"
      description: |
        The IAM role used by the application to access Kinesis data streams, Kinesis Data Firehose delivery streams, Amazon S3 objects, and other external resources.
    - name: ApplicationConfiguration
      description: |
        Use this parameter to configure the application.
      value:
        SqlApplicationConfiguration:
          Inputs:
            - NamePrefix: "{{ NamePrefix }}"
              InputProcessingConfiguration:
                InputLambdaProcessor:
                  ResourceARN: "{{ ResourceARN }}"
              KinesisStreamsInput:
                ResourceARN: "{{ ResourceARN }}"
              KinesisFirehoseInput:
                ResourceARN: "{{ ResourceARN }}"
              InputParallelism:
                Count: {{ Count }}
              InputSchema:
                RecordFormat:
                  RecordFormatType: "{{ RecordFormatType }}"
                  MappingParameters: "{{ MappingParameters }}"
                RecordEncoding: "{{ RecordEncoding }}"
                RecordColumns:
                  - Name: "{{ Name }}"
                    Mapping: "{{ Mapping }}"
                    SqlType: "{{ SqlType }}"
          Outputs:
            - Name: "{{ Name }}"
              KinesisStreamsOutput:
                ResourceARN: "{{ ResourceARN }}"
              KinesisFirehoseOutput:
                ResourceARN: "{{ ResourceARN }}"
              LambdaOutput:
                ResourceARN: "{{ ResourceARN }}"
              DestinationSchema:
                RecordFormatType: "{{ RecordFormatType }}"
          ReferenceDataSources:
            - TableName: "{{ TableName }}"
              S3ReferenceDataSource:
                BucketARN: "{{ BucketARN }}"
                FileKey: "{{ FileKey }}"
              ReferenceSchema:
                RecordFormat:
                  RecordFormatType: "{{ RecordFormatType }}"
                  MappingParameters: "{{ MappingParameters }}"
                RecordEncoding: "{{ RecordEncoding }}"
                RecordColumns:
                  - Name: "{{ Name }}"
                    Mapping: "{{ Mapping }}"
                    SqlType: "{{ SqlType }}"
        FlinkApplicationConfiguration:
          CheckpointConfiguration:
            ConfigurationType: "{{ ConfigurationType }}"
            CheckpointingEnabled: {{ CheckpointingEnabled }}
            CheckpointInterval: {{ CheckpointInterval }}
            MinPauseBetweenCheckpoints: {{ MinPauseBetweenCheckpoints }}
          MonitoringConfiguration:
            ConfigurationType: "{{ ConfigurationType }}"
            MetricsLevel: "{{ MetricsLevel }}"
            LogLevel: "{{ LogLevel }}"
          ParallelismConfiguration:
            ConfigurationType: "{{ ConfigurationType }}"
            Parallelism: {{ Parallelism }}
            ParallelismPerKPU: {{ ParallelismPerKPU }}
            AutoScalingEnabled: {{ AutoScalingEnabled }}
        EnvironmentProperties:
          PropertyGroups:
            - PropertyGroupId: "{{ PropertyGroupId }}"
              PropertyMap: "{{ PropertyMap }}"
        ApplicationCodeConfiguration:
          CodeContent:
            TextContent: "{{ TextContent }}"
            ZipFileContent: "{{ ZipFileContent }}"
            S3ContentLocation:
              BucketARN: "{{ BucketARN }}"
              FileKey: "{{ FileKey }}"
              ObjectVersion: "{{ ObjectVersion }}"
          CodeContentType: "{{ CodeContentType }}"
        ApplicationSnapshotConfiguration:
          SnapshotsEnabled: {{ SnapshotsEnabled }}
        ApplicationSystemRollbackConfiguration:
          RollbackEnabled: {{ RollbackEnabled }}
        VpcConfigurations:
          - SubnetIds: "{{ SubnetIds }}"
            SecurityGroupIds: "{{ SecurityGroupIds }}"
        ZeppelinApplicationConfiguration:
          MonitoringConfiguration:
            LogLevel: "{{ LogLevel }}"
          CatalogConfiguration:
            GlueDataCatalogConfiguration:
              DatabaseARN: "{{ DatabaseARN }}"
          DeployAsApplicationConfiguration:
            S3ContentLocation:
              BucketARN: "{{ BucketARN }}"
              BasePath: "{{ BasePath }}"
          CustomArtifactsConfiguration:
            - ArtifactType: "{{ ArtifactType }}"
              S3ContentLocation:
                BucketARN: "{{ BucketARN }}"
                FileKey: "{{ FileKey }}"
                ObjectVersion: "{{ ObjectVersion }}"
              MavenReference:
                GroupId: "{{ GroupId }}"
                ArtifactId: "{{ ArtifactId }}"
                Version: "{{ Version }}"
        ApplicationEncryptionConfiguration:
          KeyId: "{{ KeyId }}"
          KeyType: "{{ KeyType }}"
    - name: CloudWatchLoggingOptions
      description: |
        Use this parameter to configure an Amazon CloudWatch log stream to monitor application configuration errors.
      value:
        - LogStreamARN: "{{ LogStreamARN }}"
    - name: Tags
      description: |
        A list of one or more tags to assign to the application. A tag is a key-value pair that identifies an application. Note that the maximum number of application tags includes system tags. The maximum number of user-defined application tags is 50. For more information, see Using Tagging.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ApplicationMode
      value: "{{ ApplicationMode }}"
      description: |
        Use the STREAMING mode to create a Managed Service for Apache Flink application. To create a Managed Service for Apache Flink Studio notebook, use the INTERACTIVE mode.
      valid_values: ['STREAMING', 'INTERACTIVE']
    - name: UrlType
      value: "{{ UrlType }}"
      description: |
        The type of the extension for which to create and return a URL. Currently, the only valid extension URL type is FLINK_DASHBOARD_URL.
      valid_values: ['FLINK_DASHBOARD_URL', 'ZEPPELIN_UI_URL']
    - name: SessionExpirationDurationInSeconds
      value: {{ SessionExpirationDurationInSeconds }}
      description: |
        The duration in seconds for which the returned URL will be valid.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_application_input_processing_configuration"
    values={[
        { label: 'add_application_input_processing_configuration', value: 'add_application_input_processing_configuration' },
        { label: 'add_application_input', value: 'add_application_input' },
        { label: 'add_application_output', value: 'add_application_output' },
        { label: 'add_application_reference_data_source', value: 'add_application_reference_data_source' },
        { label: 'add_application_cloud_watch_logging_option', value: 'add_application_cloud_watch_logging_option' },
        { label: 'add_application_vpc_configuration', value: 'add_application_vpc_configuration' },
        { label: 'update_application_maintenance_configuration', value: 'update_application_maintenance_configuration' },
        { label: 'update_application', value: 'update_application' }
    ]}
>
<TabItem value="add_application_input_processing_configuration">

Adds an InputProcessingConfiguration to a SQL-based Kinesis Data Analytics application. An input processor pre-processes records on the input stream before the application's SQL code executes. Currently, the only input processor available is Amazon Lambda.

```sql
UPDATE aws.kinesisanalyticsv2.applications
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
AND InputProcessingConfiguration = '{{ InputProcessingConfiguration }}' --required
RETURNING
application_arn,
application_version_id,
input_id,
input_processing_configuration_description;
```
</TabItem>
<TabItem value="add_application_input">

Adds a streaming source to your SQL-based Kinesis Data Analytics application. You can add a streaming source when you create an application, or you can use this operation to add a streaming source after you create an application. For more information, see CreateApplication. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version.

```sql
UPDATE aws.kinesisanalyticsv2.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
Input = '{{ Input }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND Input = '{{ Input }}' --required
RETURNING
application_arn,
application_version_id,
input_descriptions;
```
</TabItem>
<TabItem value="add_application_output">

Adds an external destination to your SQL-based Kinesis Data Analytics application. If you want Kinesis Data Analytics to deliver data from an in-application stream within your application to an external destination (such as an Kinesis data stream, a Kinesis Data Firehose delivery stream, or an Amazon Lambda function), you add the relevant configuration to your application using this operation. You can configure one or more outputs for your application. Each output configuration maps an in-application stream and an external destination. You can use one of the output configurations to deliver data from your in-application error stream to an external destination so that you can analyze the errors. Any configuration update, including adding a streaming source using this operation, results in a new version of the application. You can use the DescribeApplication operation to find the current application version.

```sql
UPDATE aws.kinesisanalyticsv2.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
Output = '{{ Output }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND Output = '{{ Output }}' --required
RETURNING
application_arn,
application_version_id,
output_descriptions;
```
</TabItem>
<TabItem value="add_application_reference_data_source">

Adds a reference data source to an existing SQL-based Kinesis Data Analytics application. Kinesis Data Analytics reads reference data (that is, an Amazon S3 object) and creates an in-application table within your application. In the request, you provide the source (S3 bucket name and object key name), name of the in-application table to create, and the necessary mapping information that describes how data in an Amazon S3 object maps to columns in the resulting in-application table.

```sql
UPDATE aws.kinesisanalyticsv2.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
ReferenceDataSource = '{{ ReferenceDataSource }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CurrentApplicationVersionId = '{{ CurrentApplicationVersionId }}' --required
AND ReferenceDataSource = '{{ ReferenceDataSource }}' --required
RETURNING
application_arn,
application_version_id,
reference_data_source_descriptions;
```
</TabItem>
<TabItem value="add_application_cloud_watch_logging_option">

Adds an Amazon CloudWatch log stream to monitor application configuration errors.

```sql
UPDATE aws.kinesisanalyticsv2.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
CloudWatchLoggingOption = '{{ CloudWatchLoggingOption }}',
ConditionalToken = '{{ ConditionalToken }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND CloudWatchLoggingOption = '{{ CloudWatchLoggingOption }}' --required
RETURNING
application_arn,
application_version_id,
cloud_watch_logging_option_descriptions,
operation_id;
```
</TabItem>
<TabItem value="add_application_vpc_configuration">

Adds a Virtual Private Cloud (VPC) configuration to the application. Applications can use VPCs to store and access resources securely. Note the following about VPC configurations for Managed Service for Apache Flink applications: VPC configurations are not supported for SQL applications. When a VPC is added to a Managed Service for Apache Flink application, the application can no longer be accessed from the Internet directly. To enable Internet access to the application, add an Internet gateway to your VPC.

```sql
UPDATE aws.kinesisanalyticsv2.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
VpcConfiguration = '{{ VpcConfiguration }}',
ConditionalToken = '{{ ConditionalToken }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND VpcConfiguration = '{{ VpcConfiguration }}' --required
RETURNING
application_arn,
application_version_id,
operation_id,
vpc_configuration_description;
```
</TabItem>
<TabItem value="update_application_maintenance_configuration">

Updates the maintenance configuration of the Managed Service for Apache Flink application. You can invoke this operation on an application that is in one of the two following states: READY or RUNNING. If you invoke it when the application is in a state other than these two states, it throws a ResourceInUseException. The service makes use of the updated configuration the next time it schedules maintenance for the application. If you invoke this operation after the service schedules maintenance, the service will apply the configuration update the next time it schedules maintenance for the application. This means that you might not see the maintenance configuration update applied to the maintenance process that follows a successful invocation of this operation, but to the following maintenance process instead. To see the current maintenance configuration of your application, invoke the DescribeApplication operation. For information about application maintenance, see Managed Service for Apache Flink for Apache Flink Maintenance. This operation is supported only for Managed Service for Apache Flink.

```sql
UPDATE aws.kinesisanalyticsv2.applications
SET 
ApplicationName = '{{ ApplicationName }}',
ApplicationMaintenanceConfigurationUpdate = '{{ ApplicationMaintenanceConfigurationUpdate }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
AND ApplicationMaintenanceConfigurationUpdate = '{{ ApplicationMaintenanceConfigurationUpdate }}' --required
RETURNING
application_arn,
application_maintenance_configuration_description;
```
</TabItem>
<TabItem value="update_application">

Updates an existing Managed Service for Apache Flink application. Using this operation, you can update application code, input configuration, and output configuration. Managed Service for Apache Flink updates the ApplicationVersionId each time you update your application.

```sql
UPDATE aws.kinesisanalyticsv2.applications
SET 
ApplicationName = '{{ ApplicationName }}',
CurrentApplicationVersionId = {{ CurrentApplicationVersionId }},
ApplicationConfigurationUpdate = '{{ ApplicationConfigurationUpdate }}',
ServiceExecutionRoleUpdate = '{{ ServiceExecutionRoleUpdate }}',
RunConfigurationUpdate = '{{ RunConfigurationUpdate }}',
CloudWatchLoggingOptionUpdates = '{{ CloudWatchLoggingOptionUpdates }}',
ConditionalToken = '{{ ConditionalToken }}',
RuntimeEnvironmentUpdate = '{{ RuntimeEnvironmentUpdate }}'
WHERE 
region = '{{ region }}' --required
AND ApplicationName = '{{ ApplicationName }}' --required
RETURNING
application_detail,
operation_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_input_processing_configuration"
    values={[
        { label: 'delete_application_input_processing_configuration', value: 'delete_application_input_processing_configuration' },
        { label: 'delete_application_output', value: 'delete_application_output' },
        { label: 'delete_application_reference_data_source', value: 'delete_application_reference_data_source' },
        { label: 'delete_application', value: 'delete_application' },
        { label: 'delete_application_cloud_watch_logging_option', value: 'delete_application_cloud_watch_logging_option' },
        { label: 'delete_application_vpc_configuration', value: 'delete_application_vpc_configuration' }
    ]}
>
<TabItem value="delete_application_input_processing_configuration">

Deletes an InputProcessingConfiguration from an input.

```sql
DELETE FROM aws.kinesisanalyticsv2.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application_output">

Deletes the output destination configuration from your SQL-based Kinesis Data Analytics application's configuration. Kinesis Data Analytics will no longer write data from the corresponding in-application stream to the external output destination.

```sql
DELETE FROM aws.kinesisanalyticsv2.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application_reference_data_source">

Deletes a reference data source configuration from the specified SQL-based Kinesis Data Analytics application's configuration. If the application is running, Kinesis Data Analytics immediately removes the in-application table that you created using the AddApplicationReferenceDataSource operation.

```sql
DELETE FROM aws.kinesisanalyticsv2.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application">

Deletes the specified application. Managed Service for Apache Flink halts application execution and deletes the application.

```sql
DELETE FROM aws.kinesisanalyticsv2.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application_cloud_watch_logging_option">

Deletes an Amazon CloudWatch log stream from an SQL-based Kinesis Data Analytics application.

```sql
DELETE FROM aws.kinesisanalyticsv2.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_application_vpc_configuration">

Removes a VPC configuration from a Managed Service for Apache Flink application.

```sql
DELETE FROM aws.kinesisanalyticsv2.applications
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="rollback_application"
    values={[
        { label: 'rollback_application', value: 'rollback_application' },
        { label: 'start_application', value: 'start_application' },
        { label: 'stop_application', value: 'stop_application' }
    ]}
>
<TabItem value="rollback_application">

Reverts the application to the previous running version. You can roll back an application if you suspect it is stuck in a transient status or in the running status. You can roll back an application only if it is in the UPDATING, AUTOSCALING, or RUNNING statuses. When you rollback an application, it loads state data from the last successful snapshot. If the application has no snapshots, Managed Service for Apache Flink rejects the rollback request.

```sql
EXEC aws.kinesisanalyticsv2.applications.rollback_application 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationName": "{{ ApplicationName }}", 
"CurrentApplicationVersionId": {{ CurrentApplicationVersionId }}
}'
;
```
</TabItem>
<TabItem value="start_application">

Starts the specified Managed Service for Apache Flink application. After creating an application, you must exclusively call this operation to start your application.

```sql
EXEC aws.kinesisanalyticsv2.applications.start_application 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationName": "{{ ApplicationName }}", 
"RunConfiguration": "{{ RunConfiguration }}"
}'
;
```
</TabItem>
<TabItem value="stop_application">

Stops the application from processing data. You can stop an application only if it is in the running status, unless you set the Force parameter to true. You can use the DescribeApplication operation to find the application status. Managed Service for Apache Flink takes a snapshot when the application is stopped, unless Force is set to true.

```sql
EXEC aws.kinesisanalyticsv2.applications.stop_application 
@region='{{ region }}' --required 
@@json=
'{
"ApplicationName": "{{ ApplicationName }}", 
"Force": {{ Force }}
}'
;
```
</TabItem>
</Tabs>
