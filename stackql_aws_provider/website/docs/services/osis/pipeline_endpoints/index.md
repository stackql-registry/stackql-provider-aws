--- 
title: pipeline_endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_endpoints
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

Creates, updates, deletes, gets or lists a <code>pipeline_endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.osis.pipeline_endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pipeline_endpoints"
    values={[
        { label: 'list_pipeline_endpoints', value: 'list_pipeline_endpoints' }
    ]}
>
<TabItem value="list_pipeline_endpoints">

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
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the pipeline endpoint. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ingest_endpoint_url" /></td>
    <td><code>string</code></td>
    <td>The URL used to ingest data to the pipeline through the VPC endpoint.</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline associated with this endpoint. (pattern: &lt;code&gt;^arn:(aws|aws\-cn|aws\-us\-gov|aws\-iso|aws\-iso\-b):osis:.+:pipeline\/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the pipeline endpoint. (CREATING, ACTIVE, CREATE_FAILED, DELETING, REVOKING, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the VPC where the pipeline endpoint is created.</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_options" /></td>
    <td><code>object</code></td>
    <td>Configuration settings for the VPC endpoint, specifying network access controls.</td>
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
    <td><a href="#list_pipeline_endpoints"><CopyableCode code="list_pipeline_endpoints" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists all pipeline endpoints in your account.</td>
</tr>
<tr>
    <td><a href="#create_pipeline_endpoint"><CopyableCode code="create_pipeline_endpoint" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineArn"><code>PipelineArn</code></a>, <a href="#parameter-VpcOptions"><code>VpcOptions</code></a></td>
    <td></td>
    <td>Creates a VPC endpoint for an OpenSearch Ingestion pipeline. Pipeline endpoints allow you to ingest data from your VPC into pipelines that you have access to.</td>
</tr>
<tr>
    <td><a href="#delete_pipeline_endpoint"><CopyableCode code="delete_pipeline_endpoint" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-endpoint_id"><code>endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a VPC endpoint for an OpenSearch Ingestion pipeline.</td>
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
<tr id="parameter-endpoint_id">
    <td><CopyableCode code="endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the pipeline endpoint to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of pipeline endpoints to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListPipelineEndpoints operation returns a NextToken, you can include the returned NextToken in subsequent ListPipelineEndpoints operations, which returns results in the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_pipeline_endpoints"
    values={[
        { label: 'list_pipeline_endpoints', value: 'list_pipeline_endpoints' }
    ]}
>
<TabItem value="list_pipeline_endpoints">

Lists all pipeline endpoints in your account.

```sql
SELECT
endpoint_id,
ingest_endpoint_url,
pipeline_arn,
status,
vpc_id,
vpc_options
FROM aws.osis.pipeline_endpoints
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_pipeline_endpoint"
    values={[
        { label: 'create_pipeline_endpoint', value: 'create_pipeline_endpoint' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_pipeline_endpoint">

Creates a VPC endpoint for an OpenSearch Ingestion pipeline. Pipeline endpoints allow you to ingest data from your VPC into pipelines that you have access to.

```sql
INSERT INTO aws.osis.pipeline_endpoints (
PipelineArn,
VpcOptions,
region
)
SELECT 
'{{ PipelineArn }}' /* required */,
'{{ VpcOptions }}' /* required */,
'{{ region }}'
RETURNING
endpoint_id,
pipeline_arn,
status,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: pipeline_endpoints
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the pipeline_endpoints resource.
    - name: PipelineArn
      value: "{{ PipelineArn }}"
    - name: VpcOptions
      description: |
        Configuration settings for the VPC endpoint, specifying network access controls.
      value:
        SubnetIds:
          - "{{ SubnetIds }}"
        SecurityGroupIds:
          - "{{ SecurityGroupIds }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_pipeline_endpoint"
    values={[
        { label: 'delete_pipeline_endpoint', value: 'delete_pipeline_endpoint' }
    ]}
>
<TabItem value="delete_pipeline_endpoint">

Deletes a VPC endpoint for an OpenSearch Ingestion pipeline.

```sql
DELETE FROM aws.osis.pipeline_endpoints
WHERE endpoint_id = '{{ endpoint_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
