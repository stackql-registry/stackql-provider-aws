--- 
title: lifecycle_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - lifecycle_policies
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

Creates, updates, deletes, gets or lists a <code>lifecycle_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="lifecycle_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.lifecycle_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="batch_get_lifecycle_policy"
    values={[
        { label: 'batch_get_lifecycle_policy', value: 'batch_get_lifecycle_policy' },
        { label: 'list_lifecycle_policies', value: 'list_lifecycle_policies' }
    ]}
>
<TabItem value="batch_get_lifecycle_policy">

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
    <td><CopyableCode code="lifecycle_policy_details" /></td>
    <td><code>array</code></td>
    <td>A list of lifecycle policies matched to the input policy name and policy type.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle_policy_error_details" /></td>
    <td><code>array</code></td>
    <td>A list of lifecycle policy names and policy types for which retrieval failed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_lifecycle_policies">

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
    <td><CopyableCode code="lifecycle_policy_summaries" /></td>
    <td><code>array</code></td>
    <td>Details about the requested lifecycle policies.</td>
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
    <td><a href="#batch_get_lifecycle_policy"><CopyableCode code="batch_get_lifecycle_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns one or more configured OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies.</td>
</tr>
<tr>
    <td><a href="#list_lifecycle_policies"><CopyableCode code="list_lifecycle_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies.</td>
</tr>
<tr>
    <td><a href="#create_lifecycle_policy"><CopyableCode code="create_lifecycle_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates a lifecyle policy to be applied to OpenSearch Serverless indexes. Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see Creating data lifecycle policies.</td>
</tr>
<tr>
    <td><a href="#update_lifecycle_policy"><CopyableCode code="update_lifecycle_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-policyVersion"><code>policyVersion</code></a></td>
    <td></td>
    <td>Updates an OpenSearch Serverless access policy. For more information, see Updating data lifecycle policies.</td>
</tr>
<tr>
    <td><a href="#delete_lifecycle_policy"><CopyableCode code="delete_lifecycle_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenSearch Serverless lifecycle policy. For more information, see Deleting data lifecycle policies.</td>
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
    defaultValue="batch_get_lifecycle_policy"
    values={[
        { label: 'batch_get_lifecycle_policy', value: 'batch_get_lifecycle_policy' },
        { label: 'list_lifecycle_policies', value: 'list_lifecycle_policies' }
    ]}
>
<TabItem value="batch_get_lifecycle_policy">

Returns one or more configured OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies.

```sql
SELECT
lifecycle_policy_details,
lifecycle_policy_error_details
FROM aws.opensearchserverless.lifecycle_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_lifecycle_policies">

Returns a list of OpenSearch Serverless lifecycle policies. For more information, see Viewing data lifecycle policies.

```sql
SELECT
lifecycle_policy_summaries,
next_token
FROM aws.opensearchserverless.lifecycle_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_lifecycle_policy"
    values={[
        { label: 'create_lifecycle_policy', value: 'create_lifecycle_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_lifecycle_policy">

Creates a lifecyle policy to be applied to OpenSearch Serverless indexes. Lifecycle policies define the number of days or hours to retain the data on an OpenSearch Serverless index. For more information, see Creating data lifecycle policies.

```sql
INSERT INTO aws.opensearchserverless.lifecycle_policies (
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
lifecycle_policy_detail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: lifecycle_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the lifecycle_policies resource.
    - name: type
      value: "{{ type }}"
      description: |
        The type of lifecycle policy.
      valid_values: ['retention']
    - name: name
      value: "{{ name }}"
      description: |
        The name of the lifecycle policy.
    - name: description
      value: "{{ description }}"
      description: |
        A description of the lifecycle policy.
    - name: policy
      value: "{{ policy }}"
      description: |
        The JSON policy document to use as the content for the lifecycle policy.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_lifecycle_policy"
    values={[
        { label: 'update_lifecycle_policy', value: 'update_lifecycle_policy' }
    ]}
>
<TabItem value="update_lifecycle_policy">

Updates an OpenSearch Serverless access policy. For more information, see Updating data lifecycle policies.

```sql
UPDATE aws.opensearchserverless.lifecycle_policies
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
lifecycle_policy_detail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_lifecycle_policy"
    values={[
        { label: 'delete_lifecycle_policy', value: 'delete_lifecycle_policy' }
    ]}
>
<TabItem value="delete_lifecycle_policy">

Deletes an OpenSearch Serverless lifecycle policy. For more information, see Deleting data lifecycle policies.

```sql
DELETE FROM aws.opensearchserverless.lifecycle_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
