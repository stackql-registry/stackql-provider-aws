--- 
title: pipeline_endpoint_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - pipeline_endpoint_connections
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

Creates, updates, deletes, gets or lists a <code>pipeline_endpoint_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pipeline_endpoint_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.osis.pipeline_endpoint_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pipeline_endpoint_connections"
    values={[
        { label: 'list_pipeline_endpoint_connections', value: 'list_pipeline_endpoint_connections' }
    ]}
>
<TabItem value="list_pipeline_endpoint_connections">

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
    <td>The unique identifier of the endpoint in the connection. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-_&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="pipeline_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the pipeline in the endpoint connection. (pattern: &lt;code&gt;^arn:(aws|aws\-cn|aws\-us\-gov|aws\-iso|aws\-iso\-b):osis:.+:pipeline\/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the pipeline endpoint connection. (CREATING, ACTIVE, CREATE_FAILED, DELETING, REVOKING, REVOKED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_endpoint_owner" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the VPC endpoint used in this connection. (pattern: &lt;code&gt;^\\d&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#list_pipeline_endpoint_connections"><CopyableCode code="list_pipeline_endpoint_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the pipeline endpoints connected to pipelines in your account.</td>
</tr>
<tr>
    <td><a href="#revoke_pipeline_endpoint_connections"><CopyableCode code="revoke_pipeline_endpoint_connections" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PipelineArn"><code>PipelineArn</code></a>, <a href="#parameter-EndpointIds"><code>EndpointIds</code></a></td>
    <td></td>
    <td>Revokes pipeline endpoints from specified endpoint IDs.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of pipeline endpoint connections to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If your initial ListPipelineEndpointConnections operation returns a nextToken, you can include the returned nextToken in subsequent ListPipelineEndpointConnections operations, which returns results in the next page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_pipeline_endpoint_connections"
    values={[
        { label: 'list_pipeline_endpoint_connections', value: 'list_pipeline_endpoint_connections' }
    ]}
>
<TabItem value="list_pipeline_endpoint_connections">

Lists the pipeline endpoints connected to pipelines in your account.

```sql
SELECT
endpoint_id,
pipeline_arn,
status,
vpc_endpoint_owner
FROM aws.osis.pipeline_endpoint_connections
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_pipeline_endpoint_connections"
    values={[
        { label: 'revoke_pipeline_endpoint_connections', value: 'revoke_pipeline_endpoint_connections' }
    ]}
>
<TabItem value="revoke_pipeline_endpoint_connections">

Revokes pipeline endpoints from specified endpoint IDs.

```sql
UPDATE aws.osis.pipeline_endpoint_connections
SET 
PipelineArn = '{{ PipelineArn }}',
EndpointIds = '{{ EndpointIds }}'
WHERE 
region = '{{ region }}' --required
AND PipelineArn = '{{ PipelineArn }}' --required
AND EndpointIds = '{{ EndpointIds }}' --required
RETURNING
pipeline_arn;
```
</TabItem>
</Tabs>
