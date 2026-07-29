--- 
title: pipelines
hide_title: false
hide_table_of_contents: false
keywords:
  - pipelines
  - osis
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

Creates, updates, deletes, gets or lists a <code>pipelines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipelines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.osis.pipelines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_pipeline"
    values={[
        { label: 'get_pipeline', value: 'get_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="get_pipeline">

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
    <td><CopyableCode code="buffer_options" /></td>
    <td><code>object</code></td>
    <td>Options that specify the configuration of a persistent buffer. To configure how OpenSearch Ingestion encrypts this data, set the EncryptionAtRestOptions. For more information, see Persistent buffering.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the pipeline was created.</td>
</tr>
<tr>
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>Destinations to which the pipeline writes data.</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_at_rest_options" /></td>
    <td><code>object</code></td>
    <td>Options to control how OpenSearch encrypts buffer data.</td>
</tr>
<tr>
    <td><CopyableCode code="ingest_endpoint_urls" /></td>
    <td><code>array</code></td>
    <td>The ingestion endpoints for the pipeline, which you can send data to.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the pipeline was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="log_publishing_options" /></td>
    <td><code>object</code></td>
    <td>Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs.</td>
</tr>
<tr>
    <td><CopyableCode code="max_units" /></td>
    <td><code>integer</code></td>
    <td>The maximum pipeline capacity, in Ingestion Compute Units (ICUs).</td>
</tr>
<tr>
    <td><CopyableCode code="min_units" /></td>
    <td><code>integer</code></td>
    <td>The minimum pipeline capacity, in Ingestion Compute Units (ICUs).</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_configuration_body" /></td>
    <td><code>string</code></td>
    <td>The Data Prepper pipeline configuration in YAML format.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the IAM role that the pipeline uses to access AWS resources. (pattern: &lt;code&gt;^arn:(aws|aws\-cn|aws\-us\-gov|aws\-iso|aws\-iso\-b|aws\-iso\-e|aws\-iso\-f):iam::&#91;0-9&#93;+:role\/.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="service_vpc_endpoints" /></td>
    <td><code>array</code></td>
    <td>A list of VPC endpoints that OpenSearch Ingestion has created to other Amazon Web Services services.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the pipeline. (CREATING, ACTIVE, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, STARTING, START_FAILED, STOPPING, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="status_reason" /></td>
    <td><code>object</code></td>
    <td>The reason for the current status of the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>A list of tags associated with the given pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_service" /></td>
    <td><code>string</code></td>
    <td>The VPC endpoint service name for the pipeline.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoints" /></td>
    <td><code>array</code></td>
    <td>The VPC interface endpoints that have access to the pipeline.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_pipelines">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page. (pattern: &lt;code&gt;^(&#91;\s\S&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipelines" /></td>
    <td><code>array</code></td>
    <td>A list of all existing Data Prepper pipelines.</td>
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
    <td><a href="#get_pipeline"><CopyableCode code="get_pipeline" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about an OpenSearch Ingestion pipeline.</td>
</tr>
<tr>
    <td><a href="#list_pipelines"><CopyableCode code="list_pipelines" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all OpenSearch Ingestion pipelines in the current Amazon Web Services account and Region. For more information, see Viewing Amazon OpenSearch Ingestion pipelines.</td>
</tr>
<tr>
    <td><a href="#create_pipeline"><CopyableCode code="create_pipeline" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineName"><code>PipelineName</code></a>, <a href="#parameter-MinUnits"><code>MinUnits</code></a>, <a href="#parameter-MaxUnits"><code>MaxUnits</code></a>, <a href="#parameter-PipelineConfigurationBody"><code>PipelineConfigurationBody</code></a></td>
    <td></td>
    <td>Creates an OpenSearch Ingestion pipeline. For more information, see Creating Amazon OpenSearch Ingestion pipelines.</td>
</tr>
<tr>
    <td><a href="#update_pipeline"><CopyableCode code="update_pipeline" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an OpenSearch Ingestion pipeline. For more information, see Updating Amazon OpenSearch Ingestion pipelines.</td>
</tr>
<tr>
    <td><a href="#delete_pipeline"><CopyableCode code="delete_pipeline" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pipeline_name"><code>pipeline_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenSearch Ingestion pipeline. For more information, see Deleting Amazon OpenSearch Ingestion pipelines.</td>
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
<tr id="parameter-pipeline_name">
    <td><CopyableCode code="pipeline_name" /></td>
    <td><code>string</code></td>
    <td>The name of the pipeline to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>An optional parameter that specifies the maximum number of results to return. You can use nextToken to get the next page of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListPipelines operation returns a nextToken, you can include the returned nextToken in subsequent ListPipelines operations, which returns results in the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_pipeline"
    values={[
        { label: 'get_pipeline', value: 'get_pipeline' },
        { label: 'list_pipelines', value: 'list_pipelines' }
    ]}
>
<TabItem value="get_pipeline">

Retrieves information about an OpenSearch Ingestion pipeline.

```sql
SELECT
buffer_options,
created_at,
destinations,
encryption_at_rest_options,
ingest_endpoint_urls,
last_updated_at,
log_publishing_options,
max_units,
min_units,
pipeline_arn,
pipeline_configuration_body,
pipeline_name,
pipeline_role_arn,
service_vpc_endpoints,
status,
status_reason,
tags,
vpc_endpoint_service,
vpc_endpoints
FROM aws.osis.pipelines
WHERE pipeline_name = '{{ pipeline_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_pipelines">

Lists all OpenSearch Ingestion pipelines in the current Amazon Web Services account and Region. For more information, see Viewing Amazon OpenSearch Ingestion pipelines.

```sql
SELECT
next_token,
pipelines
FROM aws.osis.pipelines
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pipeline"
    values={[
        { label: 'create_pipeline', value: 'create_pipeline' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pipeline">

Creates an OpenSearch Ingestion pipeline. For more information, see Creating Amazon OpenSearch Ingestion pipelines.

```sql
INSERT INTO aws.osis.pipelines (
PipelineName,
MinUnits,
MaxUnits,
PipelineConfigurationBody,
LogPublishingOptions,
VpcOptions,
BufferOptions,
EncryptionAtRestOptions,
Tags,
PipelineRoleArn,
region
)
SELECT 
'{{ PipelineName }}' /* required */,
{{ MinUnits }} /* required */,
{{ MaxUnits }} /* required */,
'{{ PipelineConfigurationBody }}' /* required */,
'{{ LogPublishingOptions }}',
'{{ VpcOptions }}',
'{{ BufferOptions }}',
'{{ EncryptionAtRestOptions }}',
'{{ Tags }}',
'{{ PipelineRoleArn }}',
'{{ region }}'
RETURNING
pipeline
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pipelines
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pipelines resource.
    - name: PipelineName
      value: "{{ PipelineName }}"
    - name: MinUnits
      value: {{ MinUnits }}
    - name: MaxUnits
      value: {{ MaxUnits }}
    - name: PipelineConfigurationBody
      value: "{{ PipelineConfigurationBody }}"
    - name: LogPublishingOptions
      description: |
        Container for the values required to configure logging for the pipeline. If you don't specify these values, OpenSearch Ingestion will not publish logs from your application to CloudWatch Logs.
      value:
        IsLoggingEnabled: {{ IsLoggingEnabled }}
        CloudWatchLogDestination:
          LogGroup: "{{ LogGroup }}"
    - name: VpcOptions
      description: |
        Options that specify the subnets and security groups for an OpenSearch Ingestion VPC endpoint.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
        VpcAttachmentOptions:
          AttachToVpc: {{ AttachToVpc }}
          CidrBlock: "{{ CidrBlock }}"
        VpcEndpointManagement: "{{ VpcEndpointManagement }}"
    - name: BufferOptions
      description: |
        Options that specify the configuration of a persistent buffer. To configure how OpenSearch Ingestion encrypts this data, set the EncryptionAtRestOptions. For more information, see Persistent buffering.
      value:
        PersistentBufferEnabled: {{ PersistentBufferEnabled }}
    - name: EncryptionAtRestOptions
      description: |
        Options to control how OpenSearch encrypts buffer data.
      value:
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: PipelineRoleArn
      value: "{{ PipelineRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_pipeline"
    values={[
        { label: 'update_pipeline', value: 'update_pipeline' }
    ]}
>
<TabItem value="update_pipeline">

Updates an OpenSearch Ingestion pipeline. For more information, see Updating Amazon OpenSearch Ingestion pipelines.

```sql
UPDATE aws.osis.pipelines
SET 
MinUnits = {{ MinUnits }},
MaxUnits = {{ MaxUnits }},
PipelineConfigurationBody = '{{ PipelineConfigurationBody }}',
LogPublishingOptions = '{{ LogPublishingOptions }}',
BufferOptions = '{{ BufferOptions }}',
EncryptionAtRestOptions = '{{ EncryptionAtRestOptions }}',
PipelineRoleArn = '{{ PipelineRoleArn }}'
WHERE 
pipeline_name = '{{ pipeline_name }}' --required
AND region = '{{ region }}' --required
RETURNING
pipeline;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pipeline"
    values={[
        { label: 'delete_pipeline', value: 'delete_pipeline' }
    ]}
>
<TabItem value="delete_pipeline">

Deletes an OpenSearch Ingestion pipeline. For more information, see Deleting Amazon OpenSearch Ingestion pipelines.

```sql
DELETE FROM aws.osis.pipelines
WHERE pipeline_name = '{{ pipeline_name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
