--- 
title: flow_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - flow_versions
  - bedrock_agent
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

Creates, updates, deletes, gets or lists a <code>flow_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flow_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.bedrock_agent.flow_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_flow_version"
    values={[
        { label: 'get_flow_version', value: 'get_flow_version' },
        { label: 'list_flow_versions', value: 'list_flow_versions' }
    ]}
>
<TabItem value="get_flow_version">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the version. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the flow was created.</td>
</tr>
<tr>
    <td><CopyableCode code="customer_encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key that the version of the flow is encrypted with. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov):kms:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:key/&#91;a-zA-Z0-9-&#93;&#123;36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="definition" /></td>
    <td><code>object</code></td>
    <td>The definition of the nodes and connections between nodes in the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the flow.</td>
</tr>
<tr>
    <td><CopyableCode code="execution_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service role with permissions to create a flow. For more information, see Create a service role for flows in Amazon Bedrock in the Amazon Bedrock User Guide. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:iam::(&#91;0-9&#93;&#123;12&#125;)?:role/(service-role/)?.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow. (Failed, Prepared, Preparing, NotPrepared)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the flow for which information was retrieved. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,5&#125;&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_flow_versions">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow. (pattern: &lt;code&gt;&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the flow that the version belongs to. (pattern: &lt;code&gt;arn:aws:bedrock:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:flow/&#91;0-9a-zA-Z&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at the version was created.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the flow. (Failed, Prepared, Preparing, NotPrepared)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the flow. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;1,5&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_flow_version"><CopyableCode code="get_flow_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-flow_version"><code>flow_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-includedData"><code>includedData</code></a></td>
    <td>Retrieves information about a version of a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#list_flow_versions"><CopyableCode code="list_flow_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of information about each flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#create_flow_version"><CopyableCode code="create_flow_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a version of the flow that you can deploy. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.</td>
</tr>
<tr>
    <td><a href="#delete_flow_version"><CopyableCode code="delete_flow_version" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-flow_identifier"><code>flow_identifier</code></a>, <a href="#parameter-flow_version"><code>flow_version</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-skipResourceInUseCheck"><code>skipResourceInUseCheck</code></a></td>
    <td>Deletes a version of a flow.</td>
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
<tr id="parameter-flow_identifier">
    <td><CopyableCode code="flow_identifier" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the flow whose version that you want to delete</td>
</tr>
<tr id="parameter-flow_version">
    <td><CopyableCode code="flow_version" /></td>
    <td><code>string</code></td>
    <td>The version of the flow that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-includedData">
    <td><CopyableCode code="includedData" /></td>
    <td><code>string</code></td>
    <td>Controls the scope of data returned. Set to METADATA_ONLY to return only resource metadata. Set to ALL_DATA or omit this field to return the full response.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the nextToken field when making another request to return the next batch of results.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>If the total number of results is greater than the maxResults value provided in the request, enter the token returned in the nextToken field in the response in this field to return the next batch of results.</td>
</tr>
<tr id="parameter-skipResourceInUseCheck">
    <td><CopyableCode code="skipResourceInUseCheck" /></td>
    <td><code>boolean</code></td>
    <td>By default, this value is false and deletion is stopped if the resource is in use. If you set it to true, the resource will be deleted even if the resource is in use.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_flow_version"
    values={[
        { label: 'get_flow_version', value: 'get_flow_version' },
        { label: 'list_flow_versions', value: 'list_flow_versions' }
    ]}
>
<TabItem value="get_flow_version">

Retrieves information about a version of a flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
SELECT
id,
name,
arn,
created_at,
customer_encryption_key_arn,
definition,
description,
execution_role_arn,
status,
version
FROM aws.bedrock_agent.flow_versions
WHERE flow_identifier = '{{ flow_identifier }}' -- required
AND flow_version = '{{ flow_version }}' -- required
AND region = '{{ region }}' -- required
AND includedData = '{{ includedData }}'
;
```
</TabItem>
<TabItem value="list_flow_versions">

Returns a list of information about each flow. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
SELECT
id,
arn,
created_at,
status,
version
FROM aws.bedrock_agent.flow_versions
WHERE flow_identifier = '{{ flow_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_flow_version"
    values={[
        { label: 'create_flow_version', value: 'create_flow_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_flow_version">

Creates a version of the flow that you can deploy. For more information, see Deploy a flow in Amazon Bedrock in the Amazon Bedrock User Guide.

```sql
INSERT INTO aws.bedrock_agent.flow_versions (
description,
clientToken,
flow_identifier,
region
)
SELECT 
'{{ description }}',
'{{ clientToken }}',
'{{ flow_identifier }}',
'{{ region }}'
RETURNING
id,
name,
arn,
created_at,
customer_encryption_key_arn,
definition,
description,
execution_role_arn,
status,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: flow_versions
  props:
    - name: flow_identifier
      value: "{{ flow_identifier }}"
      description: Required parameter for the flow_versions resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the flow_versions resource.
    - name: description
      value: "{{ description }}"
    - name: clientToken
      value: "{{ clientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_flow_version"
    values={[
        { label: 'delete_flow_version', value: 'delete_flow_version' }
    ]}
>
<TabItem value="delete_flow_version">

Deletes a version of a flow.

```sql
DELETE FROM aws.bedrock_agent.flow_versions
WHERE flow_identifier = '{{ flow_identifier }}' --required
AND flow_version = '{{ flow_version }}' --required
AND region = '{{ region }}' --required
AND skipResourceInUseCheck = '{{ skipResourceInUseCheck }}'
;
```
</TabItem>
</Tabs>
