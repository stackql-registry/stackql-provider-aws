--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - mwaa
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mwaa.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td><CopyableCode code="airflow_configuration_options" /></td>
    <td><code>object</code></td>
    <td>A list of key-value pairs containing the Apache Airflow configuration options attached to your environment. For more information, refer to Apache Airflow configuration options.</td>
</tr>
<tr>
    <td><CopyableCode code="airflow_version" /></td>
    <td><code>string</code></td>
    <td>The Apache Airflow version on your environment. Valid values: 2.7.2, 2.8.1, 2.9.2, 2.10.1, 2.10.3, 2.11.0, and 3.0.6. (pattern: &lt;code&gt;&#91;0-9a-z.&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon MWAA environment. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)?:airflow:&#91;a-z0-9\-&#93;+:\d&#123;12&#125;:environment/\w+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="celery_executor_queue" /></td>
    <td><code>string</code></td>
    <td>The queue ARN for the environment's Celery Executor. Amazon MWAA uses a Celery Executor to distribute tasks across multiple workers. When you create an environment in a shared VPC, you must provide access to the Celery Executor queue from your VPC. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)?:sqs:&#91;a-z0-9\-&#93;+:\d&#123;12&#125;:&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The day and time the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="dag_s3_path" /></td>
    <td><code>string</code></td>
    <td>The relative path to the DAGs folder in your Amazon S3 bucket. For example, s3:​//mwaa-environment/dags. For more information, refer to Adding or updating DAGs. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="database_vpc_endpoint_service" /></td>
    <td><code>string</code></td>
    <td>The VPC endpoint for the environment's Amazon RDS database. (pattern: &lt;code&gt;(&#91;a-z.-&#93;+)?com\.amazonaws\.vpce\.&#91;a-z0-9\-&#93;+\.&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint_management" /></td>
    <td><code>string</code></td>
    <td>Defines whether the VPC endpoints configured for the environment are created, and managed, by the customer or by Amazon MWAA. If set to SERVICE, Amazon MWAA will create and manage the required VPC endpoints in your VPC. If set to CUSTOMER, you must create, and manage, the VPC endpoints in your VPC. (CUSTOMER, SERVICE)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_class" /></td>
    <td><code>string</code></td>
    <td>The environment class type. Valid values: mw1.micro, mw1.small, mw1.medium, mw1.large, mw1.xlarge, and mw1.2xlarge. For more information, refer to Amazon MWAA environment class.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the execution role in IAM that allows MWAA to access Amazon Web Services resources in your environment. For example, arn:aws:iam::123456789:role/my-execution-role. For more information, refer to Amazon MWAA Execution role. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key" /></td>
    <td><code>string</code></td>
    <td>The KMS encryption key used to encrypt the data in your environment. (pattern: &lt;code&gt;(((arn:aws(-&#91;a-z&#93;+)?:kms:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-\d:\d+:)?key\/)?&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;|(arn:aws(-&#91;a-z&#93;+)?:kms:&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;+-\d:\d+:)?alias/.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>object</code></td>
    <td>The status of the last update on the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="logging_configuration" /></td>
    <td><code>object</code></td>
    <td>The Apache Airflow logs published to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="max_webservers" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. For example, in scenarios where your workload requires network calls to the Apache Airflow REST API with a high transaction-per-second (TPS) rate, Amazon MWAA will increase the number of web servers up to the number set in MaxWebserers. As TPS rates decrease Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers. Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.</td>
</tr>
<tr>
    <td><CopyableCode code="max_workers" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of workers that run in your environment. For example, 20.</td>
</tr>
<tr>
    <td><CopyableCode code="min_webservers" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of web servers that you want to run in your environment. Amazon MWAA scales the number of Apache Airflow web servers up to the number you specify for MaxWebservers when you interact with your Apache Airflow environment using Apache Airflow REST API, or the Apache Airflow CLI. As the transaction-per-second rate, and the network load, decrease, Amazon MWAA disposes of the additional web servers, and scales down to the number set in MinxWebserers. Valid values: For environments larger than mw1.micro, accepts values from 2 to 5. Defaults to 2 for all environment sizes except mw1.micro, which defaults to 1.</td>
</tr>
<tr>
    <td><CopyableCode code="min_workers" /></td>
    <td><code>integer</code></td>
    <td>The minimum number of workers that run in your environment. For example, 2.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon MWAA environment. For example, MyMWAAEnvironment. (pattern: &lt;code&gt;&#91;a-zA-Z&#93;&#91;0-9a-zA-Z-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="network_configuration" /></td>
    <td><code>object</code></td>
    <td>Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, refer to About networking on Amazon MWAA.</td>
</tr>
<tr>
    <td><CopyableCode code="plugins_s3_object_version" /></td>
    <td><code>string</code></td>
    <td>The version of the plugins.zip file in your Amazon S3 bucket. You must specify the version ID that Amazon S3 assigns to the file. Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: 3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo For more information, refer to Installing custom plugins.</td>
</tr>
<tr>
    <td><CopyableCode code="plugins_s3_path" /></td>
    <td><code>string</code></td>
    <td>The relative path to the file in your Amazon S3 bucket. For example, s3:​//mwaa-environment/plugins.zip. For more information, refer to Installing custom plugins. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="requirements_s3_object_version" /></td>
    <td><code>string</code></td>
    <td>The version of the requirements.txt file on your Amazon S3 bucket. You must specify the version ID that Amazon S3 assigns to the file. Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: 3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo For more information, refer to Installing Python dependencies.</td>
</tr>
<tr>
    <td><CopyableCode code="requirements_s3_path" /></td>
    <td><code>string</code></td>
    <td>The relative path to the requirements.txt file in your Amazon S3 bucket. For example, s3:​//mwaa-environment/requirements.txt. For more information, refer to Installing Python dependencies. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="schedulers" /></td>
    <td><code>integer</code></td>
    <td>The number of Apache Airflow schedulers that run in your Amazon MWAA environment.</td>
</tr>
<tr>
    <td><CopyableCode code="service_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the service-linked role of the environment. For more information, refer to Amazon MWAA Service-linked role. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)?:iam::\d&#123;12&#125;:role/?&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="source_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Amazon S3 bucket where your DAG code and supporting files are stored. For example, arn:aws:s3:::my-airflow-bucket-unique-name. For more information, refer to Create an Amazon S3 bucket for Amazon MWAA. (pattern: &lt;code&gt;arn:aws(-&#91;a-z&#93;+)?:s3:::&#91;a-z0-9.\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startup_script_s3_object_version" /></td>
    <td><code>string</code></td>
    <td>The version of the startup shell script in your Amazon S3 bucket. You must specify the version ID that Amazon S3 assigns to the file. Version IDs are Unicode, UTF-8 encoded, URL-ready, opaque strings that are no more than 1,024 bytes long. The following is an example: 3sL4kqtJlcpXroDTDmJ+rmSpXd3dIbrHY+MTRCxf3vjVBH40Nr8X8gdRQBpUMLUo For more information, refer to Using a startup script.</td>
</tr>
<tr>
    <td><CopyableCode code="startup_script_s3_path" /></td>
    <td><code>string</code></td>
    <td>The relative path to the startup shell script in your Amazon S3 bucket. For example, s3:​//mwaa-environment/startup.sh. Amazon MWAA runs the script as your environment starts, and before running the Apache Airflow process. You can use this script to install dependencies, modify Apache Airflow configuration options, and set environment variables. For more information, refer to Using a startup script.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Amazon MWAA environment. Valid values: CREATING - The request to create the environment is in progress. CREATING_SNAPSHOT - The request to update environment details, or upgrade the environment version, is in progress and Amazon MWAA is creating a storage volume snapshot of the Amazon RDS database cluster associated with the environment. A database snapshot is a backup created at a specific point in time. Amazon MWAA uses snapshots to recover environment metadata if the process to update or upgrade an environment fails. CREATE_FAILED - The request to create the environment failed and the environment was not created. AVAILABLE - The request was successful and the environment is ready to use. PENDING - The request was successful, but the process to create the environment is paused until you create the required VPC endpoints in your VPC. After you create the VPC endpoints, the process resumes. UPDATING - The request to update the environment is in progress. ROLLING_BACK - The request to update environment details or upgrade the environment version failed and Amazon MWAA is restoring the environment using the latest storage volume snapshot. DELETING - The request to delete the environment is in progress. DELETED - The request to delete the environment is complete, and the environment has been deleted. UNAVAILABLE - The request failed, but the environment did not return to its previous state and is not stable. UPDATE_FAILED - The request to update the environment failed and the environment was restored to its previous state successfully and is ready to use. MAINTENANCE - The environment is undergoing maintenance. Depending on the type of work Amazon MWAA is performing, your environment might be unavailable during this process. Note that as part of the maintenance work, Amazon MWAA performs with a GRACEFUL workerReplacementStrategy . You can review our troubleshooting guide for a list of common errors and their solutions. For more information, refer to Amazon MWAA troubleshooting. (CREATING, CREATE_FAILED, AVAILABLE, UPDATING, DELETING, DELETED, UNAVAILABLE, UPDATE_FAILED, ROLLING_BACK, CREATING_SNAPSHOT, PENDING, MAINTENANCE)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The key-value tag pairs associated to your environment. For example, "Environment": "Staging". For more information, refer to Tagging Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="webserver_access_mode" /></td>
    <td><code>string</code></td>
    <td>The Apache Airflow web server access mode. For more information, refer to Apache Airflow access modes. (PRIVATE_ONLY, PUBLIC_ONLY, PUBLIC_AND_PRIVATE)</td>
</tr>
<tr>
    <td><CopyableCode code="webserver_url" /></td>
    <td><code>string</code></td>
    <td>The Apache Airflow web server host name for the Amazon MWAA environment. For more information, refer to Accessing the Apache Airflow UI. (pattern: &lt;code&gt;https:​//.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="webserver_vpc_endpoint_service" /></td>
    <td><code>string</code></td>
    <td>The VPC endpoint for the environment's web server. (pattern: &lt;code&gt;(&#91;a-z.-&#93;+)?com\.amazonaws\.vpce\.&#91;a-z0-9\-&#93;+\.&#91;a-zA-Z_0-9+=,.@\-_/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="weekly_maintenance_window_start" /></td>
    <td><code>string</code></td>
    <td>The day and time of the week in Coordinated Universal Time (UTC) 24-hour standard time that weekly maintenance updates are scheduled. For example: TUE:03:30. (pattern: &lt;code&gt;.*(MON|TUE|WED|THU|FRI|SAT|SUN):(&#91;01&#93;\d|2&#91;0-3&#93;):(00|30).*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td><CopyableCode code="environment" /></td>
    <td><code>string</code></td>
    <td>Returns a list of Amazon MWAA environments.</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExecutionRoleArn"><code>ExecutionRoleArn</code></a>, <a href="#parameter-SourceBucketArn"><code>SourceBucketArn</code></a>, <a href="#parameter-DagS3Path"><code>DagS3Path</code></a>, <a href="#parameter-NetworkConfiguration"><code>NetworkConfiguration</code></a></td>
    <td></td>
    <td>Creates an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) environment.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) environment.</td>
</tr>
<tr>
    <td><a href="#publish_metrics"><CopyableCode code="publish_metrics" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-environment_name"><code>environment_name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-MetricData"><code>MetricData</code></a></td>
    <td></td>
    <td>Internal only. Publishes environment health metrics to Amazon CloudWatch.</td>
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
<tr id="parameter-environment_name">
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>Internal only. The name of the environment.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon MWAA environment. For example, MyMWAAEnvironment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to retrieve per page. For example, 5 environments per page.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>Retrieves the next page of the results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

Describes an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

```sql
SELECT
airflow_configuration_options,
airflow_version,
arn,
celery_executor_queue,
created_at,
dag_s3_path,
database_vpc_endpoint_service,
endpoint_management,
environment_class,
execution_role_arn,
kms_key,
last_update,
logging_configuration,
max_webservers,
max_workers,
min_webservers,
min_workers,
name,
network_configuration,
plugins_s3_object_version,
plugins_s3_path,
requirements_s3_object_version,
requirements_s3_path,
schedulers,
service_role_arn,
source_bucket_arn,
startup_script_s3_object_version,
startup_script_s3_path,
status,
tags,
webserver_access_mode,
webserver_url,
webserver_vpc_endpoint_service,
weekly_maintenance_window_start
FROM aws.mwaa.environments
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Lists the Amazon Managed Workflows for Apache Airflow (MWAA) environments.

```sql
SELECT
environment
FROM aws.mwaa.environments
WHERE region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Creates an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) environment.

```sql
INSERT INTO aws.mwaa.environments (
ExecutionRoleArn,
SourceBucketArn,
DagS3Path,
NetworkConfiguration,
PluginsS3Path,
PluginsS3ObjectVersion,
RequirementsS3Path,
RequirementsS3ObjectVersion,
StartupScriptS3Path,
StartupScriptS3ObjectVersion,
AirflowConfigurationOptions,
EnvironmentClass,
MaxWorkers,
KmsKey,
AirflowVersion,
LoggingConfiguration,
WeeklyMaintenanceWindowStart,
Tags,
WebserverAccessMode,
MinWorkers,
Schedulers,
EndpointManagement,
MinWebservers,
MaxWebservers,
name,
region
)
SELECT 
'{{ ExecutionRoleArn }}' /* required */,
'{{ SourceBucketArn }}' /* required */,
'{{ DagS3Path }}' /* required */,
'{{ NetworkConfiguration }}' /* required */,
'{{ PluginsS3Path }}',
'{{ PluginsS3ObjectVersion }}',
'{{ RequirementsS3Path }}',
'{{ RequirementsS3ObjectVersion }}',
'{{ StartupScriptS3Path }}',
'{{ StartupScriptS3ObjectVersion }}',
'{{ AirflowConfigurationOptions }}',
'{{ EnvironmentClass }}',
{{ MaxWorkers }},
'{{ KmsKey }}',
'{{ AirflowVersion }}',
'{{ LoggingConfiguration }}',
'{{ WeeklyMaintenanceWindowStart }}',
'{{ Tags }}',
'{{ WebserverAccessMode }}',
{{ MinWorkers }},
{{ Schedulers }},
'{{ EndpointManagement }}',
{{ MinWebservers }},
{{ MaxWebservers }},
'{{ name }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: name
      value: "{{ name }}"
      description: Required parameter for the environments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: ExecutionRoleArn
      value: "{{ ExecutionRoleArn }}"
    - name: SourceBucketArn
      value: "{{ SourceBucketArn }}"
    - name: DagS3Path
      value: "{{ DagS3Path }}"
    - name: NetworkConfiguration
      description: |
        Describes the VPC networking components used to secure and enable network traffic between the Amazon Web Services resources for your environment. For more information, refer to About networking on Amazon MWAA.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
    - name: PluginsS3Path
      value: "{{ PluginsS3Path }}"
    - name: PluginsS3ObjectVersion
      value: "{{ PluginsS3ObjectVersion }}"
    - name: RequirementsS3Path
      value: "{{ RequirementsS3Path }}"
    - name: RequirementsS3ObjectVersion
      value: "{{ RequirementsS3ObjectVersion }}"
    - name: StartupScriptS3Path
      value: "{{ StartupScriptS3Path }}"
    - name: StartupScriptS3ObjectVersion
      value: "{{ StartupScriptS3ObjectVersion }}"
    - name: AirflowConfigurationOptions
      value: "{{ AirflowConfigurationOptions }}"
    - name: EnvironmentClass
      value: "{{ EnvironmentClass }}"
    - name: MaxWorkers
      value: {{ MaxWorkers }}
    - name: KmsKey
      value: "{{ KmsKey }}"
    - name: AirflowVersion
      value: "{{ AirflowVersion }}"
    - name: LoggingConfiguration
      description: |
        Defines the Apache Airflow log types to send to CloudWatch Logs.
      value:
        DagProcessingLogs:
          Enabled: {{ Enabled }}
          LogLevel: "{{ LogLevel }}"
        SchedulerLogs:
          Enabled: {{ Enabled }}
          LogLevel: "{{ LogLevel }}"
        WebserverLogs:
          Enabled: {{ Enabled }}
          LogLevel: "{{ LogLevel }}"
        WorkerLogs:
          Enabled: {{ Enabled }}
          LogLevel: "{{ LogLevel }}"
        TaskLogs:
          Enabled: {{ Enabled }}
          LogLevel: "{{ LogLevel }}"
    - name: WeeklyMaintenanceWindowStart
      value: "{{ WeeklyMaintenanceWindowStart }}"
    - name: Tags
      value: "{{ Tags }}"
    - name: WebserverAccessMode
      value: "{{ WebserverAccessMode }}"
      valid_values: ['PRIVATE_ONLY', 'PUBLIC_ONLY', 'PUBLIC_AND_PRIVATE']
    - name: MinWorkers
      value: {{ MinWorkers }}
    - name: Schedulers
      value: {{ Schedulers }}
    - name: EndpointManagement
      value: "{{ EndpointManagement }}"
      valid_values: ['CUSTOMER', 'SERVICE']
    - name: MinWebservers
      value: {{ MinWebservers }}
    - name: MaxWebservers
      value: {{ MaxWebservers }}
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment"
    values={[
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="update_environment">

Updates an Amazon Managed Workflows for Apache Airflow (MWAA) environment.

```sql
UPDATE aws.mwaa.environments
SET 
ExecutionRoleArn = '{{ ExecutionRoleArn }}',
AirflowConfigurationOptions = '{{ AirflowConfigurationOptions }}',
AirflowVersion = '{{ AirflowVersion }}',
DagS3Path = '{{ DagS3Path }}',
EnvironmentClass = '{{ EnvironmentClass }}',
LoggingConfiguration = '{{ LoggingConfiguration }}',
MaxWorkers = {{ MaxWorkers }},
MinWorkers = {{ MinWorkers }},
MaxWebservers = {{ MaxWebservers }},
MinWebservers = {{ MinWebservers }},
WorkerReplacementStrategy = '{{ WorkerReplacementStrategy }}',
NetworkConfiguration = '{{ NetworkConfiguration }}',
PluginsS3Path = '{{ PluginsS3Path }}',
PluginsS3ObjectVersion = '{{ PluginsS3ObjectVersion }}',
RequirementsS3Path = '{{ RequirementsS3Path }}',
RequirementsS3ObjectVersion = '{{ RequirementsS3ObjectVersion }}',
Schedulers = {{ Schedulers }},
SourceBucketArn = '{{ SourceBucketArn }}',
StartupScriptS3Path = '{{ StartupScriptS3Path }}',
StartupScriptS3ObjectVersion = '{{ StartupScriptS3ObjectVersion }}',
WebserverAccessMode = '{{ WebserverAccessMode }}',
WeeklyMaintenanceWindowStart = '{{ WeeklyMaintenanceWindowStart }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
RETURNING
arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment"
    values={[
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_environment">

Deletes an Amazon Managed Workflows for Apache Airflow (Amazon MWAA) environment.

```sql
DELETE FROM aws.mwaa.environments
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="publish_metrics"
    values={[
        { label: 'publish_metrics', value: 'publish_metrics' }
    ]}
>
<TabItem value="publish_metrics">

Internal only. Publishes environment health metrics to Amazon CloudWatch.

```sql
EXEC aws.mwaa.environments.publish_metrics 
@environment_name='{{ environment_name }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"MetricData": "{{ MetricData }}"
}'
;
```
</TabItem>
</Tabs>
