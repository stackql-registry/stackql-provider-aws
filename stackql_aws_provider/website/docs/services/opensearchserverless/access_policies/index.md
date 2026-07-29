--- 
title: access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - access_policies
  - opensearchserverless
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

Creates, updates, deletes, gets or lists an <code>access_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_policy"
    values={[
        { label: 'get_access_policy', value: 'get_access_policy' },
        { label: 'list_access_policies', value: 'list_access_policies' }
    ]}
>
<TabItem value="get_access_policy">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the policy. (pattern: &lt;code&gt;&#91;a-z&#93;&#91;a-z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_date" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the policy.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp of when the policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>The JSON policy document without any whitespaces.</td>
</tr>
<tr>
    <td><CopyableCode code="policy_version" /></td>
    <td><code>string</code></td>
    <td>The version of the policy. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z+/&#93;&#123;4&#125;)*((&#91;0-9a-zA-Z+/&#93;&#123;2&#125;==)|(&#91;0-9a-zA-Z+/&#93;&#123;3&#125;=))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of access policy. (data)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_access_policies">

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
    <td><CopyableCode code="access_policy_summaries" /></td>
    <td><code>array</code></td>
    <td>Details about the requested access policies.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</td>
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
    <td><a href="#get_access_policy"><CopyableCode code="get_access_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#list_access_policies"><CopyableCode code="list_access_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a list of OpenSearch Serverless access policies.</td>
</tr>
<tr>
    <td><a href="#create_access_policy"><CopyableCode code="create_access_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see Data access control for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#update_access_policy"><CopyableCode code="update_access_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-policyVersion"><code>policyVersion</code></a></td>
    <td></td>
    <td>Updates an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#delete_access_policy"><CopyableCode code="delete_access_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.</td>
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
    defaultValue="get_access_policy"
    values={[
        { label: 'get_access_policy', value: 'get_access_policy' },
        { label: 'list_access_policies', value: 'list_access_policies' }
    ]}
>
<TabItem value="get_access_policy">

Returns an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.

```sql
SELECT
name,
created_date,
description,
last_modified_date,
policy,
policy_version,
type_
FROM aws.opensearchserverless.access_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_access_policies">

Returns information about a list of OpenSearch Serverless access policies.

```sql
SELECT
access_policy_summaries,
next_token
FROM aws.opensearchserverless.access_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_policy"
    values={[
        { label: 'create_access_policy', value: 'create_access_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_policy">

Creates a data access policy for OpenSearch Serverless. Access policies limit access to collections and the resources within them, and allow a user to access that data irrespective of the access mechanism or network source. For more information, see Data access control for Amazon OpenSearch Serverless.

```sql
INSERT INTO aws.opensearchserverless.access_policies (
type,
name,
description,
policy,
clientToken,
region
)
SELECT 
'{{ type }}' /* required */,
'{{ name }}' /* required */,
'{{ description }}',
'{{ policy }}' /* required */,
'{{ clientToken }}',
'{{ region }}'
RETURNING
access_policy_detail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_policies resource.
    - name: type
      value: "{{ type }}"
      description: |
        The type of policy.
      valid_values: ['data']
    - name: name
      value: "{{ name }}"
      description: |
        The name of the policy.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the policy. Typically used to store information about the permissions defined in the policy.
    - name: policy
      value: "{{ policy }}"
      description: |
        The JSON policy document to use as the content for the policy.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_policy"
    values={[
        { label: 'update_access_policy', value: 'update_access_policy' }
    ]}
>
<TabItem value="update_access_policy">

Updates an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.

```sql
UPDATE aws.opensearchserverless.access_policies
SET 
type = '{{ type }}',
name = '{{ name }}',
policyVersion = '{{ policyVersion }}',
description = '{{ description }}',
policy = '{{ policy }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND type = '{{ type }}' --required
AND name = '{{ name }}' --required
AND policyVersion = '{{ policyVersion }}' --required
RETURNING
access_policy_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_policy"
    values={[
        { label: 'delete_access_policy', value: 'delete_access_policy' }
    ]}
>
<TabItem value="delete_access_policy">

Deletes an OpenSearch Serverless access policy. For more information, see Data access control for Amazon OpenSearch Serverless.

```sql
DELETE FROM aws.opensearchserverless.access_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
