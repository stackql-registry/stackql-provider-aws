--- 
title: telemetry_pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - telemetry_pipelines
  - observabilityadmin
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

Creates, updates, deletes, gets or lists a <code>telemetry_pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telemetry_pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.observabilityadmin.telemetry_pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_telemetry_pipeline"
    values={[
        { label: 'get_telemetry_pipeline', value: 'get_telemetry_pipeline' },
        { label: 'list_telemetry_pipelines', value: 'list_telemetry_pipelines' }
    ]}
>
<TabItem value="get_telemetry_pipeline">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the telemetry pipeline. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration" /></td>
    <td><code>object</code></td>
    <td>Defines the configuration for a pipeline, including how data flows from sources through processors to destinations. The configuration is specified in YAML format and must include a valid pipeline definition with required source and sink components. This pipeline enables end-to-end telemetry data collection, transformation, and delivery while supporting optional processing steps and extensions for enhanced functionality. The primary pipeline configuration section are: Source: Defines where log data originates from (S3 buckets, CloudWatch Logs, third-party APIs). Each pipeline must have exactly one source. Processors (optional): Transform, parse, and enrich log data as it flows through the pipeline. Processors are applied sequentially in the order they are defined. Sink: Defines the destination where processed log data is sent. Each pipeline must have exactly one sink. Extensions (optional): Provide additional functionality such as Amazon Web Services Secrets Manager integration for credential management. For more details on each configuration section see CloudWatch pipelines User Guide. Additional comprehensive configuration examples can be found in the CreateTelemetryPipeline API docs.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry pipeline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry pipeline was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the telemetry pipeline. (pattern: &lt;code&gt;.*&#91;a-z&#93;&#91;a-z0-9\-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the telemetry pipeline. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>object</code></td>
    <td>Additional information about the pipeline status, including reasons for failure states.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The key-value pairs associated with the telemetry pipeline resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_telemetry_pipelines">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the telemetry pipeline. (pattern: &lt;code&gt;arn:aws(&#91;a-z0-9\-&#93;+)?:(&#91;a-zA-Z0-9\-&#93;+):(&#91;a-z0-9\-&#93;+)?:(&#91;0-9&#93;&#123;12&#125;)?:(.+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_summary" /></td>
    <td><code>object</code></td>
    <td>A summary of the pipeline configuration components.</td>
</tr>
<tr>
    <td><CopyableCode code="created_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry pipeline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time_stamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp when the telemetry pipeline was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the telemetry pipeline. (pattern: &lt;code&gt;.*&#91;a-z&#93;&#91;a-z0-9\-&#93;+.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the telemetry pipeline. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The key-value pairs associated with the telemetry pipeline resource.</td>
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
    <td><a href="#get_telemetry_pipeline"><CopyableCode code="get_telemetry_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific telemetry pipeline, including its configuration, status, and metadata.</td>
</tr>
<tr>
    <td><a href="#list_telemetry_pipelines"><CopyableCode code="list_telemetry_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of telemetry pipelines in your account. Returns up to 100 results. If more than 100 telemetry pipelines exist, include the NextToken value from the response to retrieve the next set of results.</td>
</tr>
<tr>
    <td><a href="#create_telemetry_pipeline"><CopyableCode code="create_telemetry_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a></td>
    <td></td>
    <td>Creates a telemetry pipeline for processing and transforming telemetry data. The pipeline defines how data flows from sources through processors to destinations, enabling data transformation and delivering capabilities.</td>
</tr>
<tr>
    <td><a href="#update_telemetry_pipeline"><CopyableCode code="update_telemetry_pipeline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineIdentifier"><code>PipelineIdentifier</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a></td>
    <td></td>
    <td>Updates the configuration of an existing telemetry pipeline. The following attributes cannot be updated after pipeline creation: Pipeline name - The pipeline name is immutable Pipeline ARN - The ARN is automatically generated and cannot be changed Source type - Once a pipeline is created with a specific source type (such as S3, CloudWatch Logs, GitHub, or third-party sources), it cannot be changed to a different source type Processors can be added, removed, or modified. However, some processors are not supported for third-party pipelines and cannot be added through updates. Source-Specific Update Rules CloudWatch Logs Sources (Vended and Custom) Updatable: sts_role_arn Fixed: data_source_name, data_source_type, sink (must remain @original) S3 Sources (Crowdstrike, Zscaler, SentinelOne, Custom) Updatable: All SQS configuration parameters, sts_role_arn, codec settings, compression type, bucket ownership settings, sink log group Fixed: notification_type, aws.region GitHub Audit Logs Updatable: All Amazon Web Services Secrets Manager attributes, scope (can switch between ORGANIZATION/ENTERPRISE), organization or enterprise name, range, authentication credentials (PAT or GitHub App) Microsoft Sources (Entra ID, Office365, Windows) Updatable: All Amazon Web Services Secrets Manager attributes, tenant_id, workspace_id (Windows only), OAuth2 credentials (client_id, client_secret) Okta Sources (SSO, Auth0) Updatable: All Amazon Web Services Secrets Manager attributes, domain, range, OAuth2 credentials (client_id, client_secret) Palo Alto Networks Updatable: All Amazon Web Services Secrets Manager attributes, hostname, basic authentication credentials (username, password) ServiceNow CMDB Updatable: All Amazon Web Services Secrets Manager attributes, instance_url, range, OAuth2 credentials (client_id, client_secret) Wiz CNAPP Updatable: All Amazon Web Services Secrets Manager attributes, region, range, OAuth2 credentials (client_id, client_secret)</td>
</tr>
<tr>
    <td><a href="#delete_telemetry_pipeline"><CopyableCode code="delete_telemetry_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a telemetry pipeline and its associated resources. This operation stops data processing and removes the pipeline configuration.</td>
</tr>
<tr>
    <td><a href="#validate_telemetry_pipeline_configuration"><CopyableCode code="validate_telemetry_pipeline_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Configuration"><code>Configuration</code></a></td>
    <td></td>
    <td>Validates a pipeline configuration without creating the pipeline. This operation checks the configuration for syntax errors and compatibility issues.</td>
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
    defaultValue="get_telemetry_pipeline"
    values={[
        { label: 'get_telemetry_pipeline', value: 'get_telemetry_pipeline' },
        { label: 'list_telemetry_pipelines', value: 'list_telemetry_pipelines' }
    ]}
>
<TabItem value="get_telemetry_pipeline">

Retrieves information about a specific telemetry pipeline, including its configuration, status, and metadata.

```sql
SELECT
arn,
configuration,
created_time_stamp,
last_update_time_stamp,
name,
status,
status_reason,
tags
FROM aws.observabilityadmin.telemetry_pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_telemetry_pipelines">

Returns a list of telemetry pipelines in your account. Returns up to 100 results. If more than 100 telemetry pipelines exist, include the NextToken value from the response to retrieve the next set of results.

```sql
SELECT
arn,
configuration_summary,
created_time_stamp,
last_update_time_stamp,
name,
status,
tags
FROM aws.observabilityadmin.telemetry_pipelines
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_telemetry_pipeline"
    values={[
        { label: 'create_telemetry_pipeline', value: 'create_telemetry_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_telemetry_pipeline">

Creates a telemetry pipeline for processing and transforming telemetry data. The pipeline defines how data flows from sources through processors to destinations, enabling data transformation and delivering capabilities.

```sql
INSERT INTO aws.observabilityadmin.telemetry_pipelines (
Name,
Configuration,
Tags,
region
)
SELECT 
'{{ Name }}',
'{{ Configuration }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: telemetry_pipelines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the telemetry_pipelines resource.
    - name: Name
      value: "{{ Name }}"
    - name: Configuration
      description: |
        Defines the configuration for a pipeline, including how data flows from sources through processors to destinations. The configuration is specified in YAML format and must include a valid pipeline definition with required source and sink components. This pipeline enables end-to-end telemetry data collection, transformation, and delivery while supporting optional processing steps and extensions for enhanced functionality. The primary pipeline configuration section are: Source: Defines where log data originates from (S3 buckets, CloudWatch Logs, third-party APIs). Each pipeline must have exactly one source. Processors (optional): Transform, parse, and enrich log data as it flows through the pipeline. Processors are applied sequentially in the order they are defined. Sink: Defines the destination where processed log data is sent. Each pipeline must have exactly one sink. Extensions (optional): Provide additional functionality such as Amazon Web Services Secrets Manager integration for credential management. For more details on each configuration section see CloudWatch pipelines User Guide. Additional comprehensive configuration examples can be found in the CreateTelemetryPipeline API docs.
      value:
        Body: "{{ Body }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_telemetry_pipeline"
    values={[
        { label: 'update_telemetry_pipeline', value: 'update_telemetry_pipeline' }
    ]}
>
<TabItem value="update_telemetry_pipeline">

Updates the configuration of an existing telemetry pipeline. The following attributes cannot be updated after pipeline creation: Pipeline name - The pipeline name is immutable Pipeline ARN - The ARN is automatically generated and cannot be changed Source type - Once a pipeline is created with a specific source type (such as S3, CloudWatch Logs, GitHub, or third-party sources), it cannot be changed to a different source type Processors can be added, removed, or modified. However, some processors are not supported for third-party pipelines and cannot be added through updates. Source-Specific Update Rules CloudWatch Logs Sources (Vended and Custom) Updatable: sts_role_arn Fixed: data_source_name, data_source_type, sink (must remain @original) S3 Sources (Crowdstrike, Zscaler, SentinelOne, Custom) Updatable: All SQS configuration parameters, sts_role_arn, codec settings, compression type, bucket ownership settings, sink log group Fixed: notification_type, aws.region GitHub Audit Logs Updatable: All Amazon Web Services Secrets Manager attributes, scope (can switch between ORGANIZATION/ENTERPRISE), organization or enterprise name, range, authentication credentials (PAT or GitHub App) Microsoft Sources (Entra ID, Office365, Windows) Updatable: All Amazon Web Services Secrets Manager attributes, tenant_id, workspace_id (Windows only), OAuth2 credentials (client_id, client_secret) Okta Sources (SSO, Auth0) Updatable: All Amazon Web Services Secrets Manager attributes, domain, range, OAuth2 credentials (client_id, client_secret) Palo Alto Networks Updatable: All Amazon Web Services Secrets Manager attributes, hostname, basic authentication credentials (username, password) ServiceNow CMDB Updatable: All Amazon Web Services Secrets Manager attributes, instance_url, range, OAuth2 credentials (client_id, client_secret) Wiz CNAPP Updatable: All Amazon Web Services Secrets Manager attributes, region, range, OAuth2 credentials (client_id, client_secret)

```sql
UPDATE aws.observabilityadmin.telemetry_pipelines
SET 
PipelineIdentifier = '{{ PipelineIdentifier }}',
Configuration = '{{ Configuration }}'
WHERE 
region = '{{ region }}' --required
AND PipelineIdentifier = '{{ PipelineIdentifier }}' --required
AND Configuration = '{{ Configuration }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_telemetry_pipeline"
    values={[
        { label: 'delete_telemetry_pipeline', value: 'delete_telemetry_pipeline' }
    ]}
>
<TabItem value="delete_telemetry_pipeline">

Deletes a telemetry pipeline and its associated resources. This operation stops data processing and removes the pipeline configuration.

```sql
DELETE FROM aws.observabilityadmin.telemetry_pipelines
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_telemetry_pipeline_configuration"
    values={[
        { label: 'validate_telemetry_pipeline_configuration', value: 'validate_telemetry_pipeline_configuration' }
    ]}
>
<TabItem value="validate_telemetry_pipeline_configuration">

Validates a pipeline configuration without creating the pipeline. This operation checks the configuration for syntax errors and compatibility issues.

```sql
EXEC aws.observabilityadmin.telemetry_pipelines.validate_telemetry_pipeline_configuration 
@region='{{ region }}' --required 
@@json=
'{
"Configuration": "{{ Configuration }}"
}'
;
```
</TabItem>
</Tabs>
