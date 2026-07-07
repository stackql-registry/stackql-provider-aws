--- 
title: security_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - security_policies
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

Creates, updates, deletes, gets or lists a <code>security_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="security_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.opensearchserverless.security_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_security_policy"
    values={[
        { label: 'get_security_policy', value: 'get_security_policy' },
        { label: 'list_security_policies', value: 'list_security_policies' }
    ]}
>
<TabItem value="get_security_policy">

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
    <td><CopyableCode code="createdDate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The date the policy was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the security policy.</td>
</tr>
<tr>
    <td><CopyableCode code="lastModifiedDate" /></td>
    <td><code>integer (int64)</code></td>
    <td>The timestamp of when the policy was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="policy" /></td>
    <td><code>object</code></td>
    <td>The JSON policy document without any whitespaces.</td>
</tr>
<tr>
    <td><CopyableCode code="policyVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the policy. (pattern: &lt;code&gt;(&#91;0-9a-zA-Z+/&#93;&#123;4&#125;)*((&#91;0-9a-zA-Z+/&#93;&#123;2&#125;==)|(&#91;0-9a-zA-Z+/&#93;&#123;3&#125;=))?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of security policy. (encryption, network)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_security_policies">

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
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.</td>
</tr>
<tr>
    <td><CopyableCode code="securityPolicySummaries" /></td>
    <td><code>array</code></td>
    <td>Details about the security policies in your account.</td>
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
    <td><a href="#get_security_policy"><CopyableCode code="get_security_policy" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a configured OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#list_security_policies"><CopyableCode code="list_security_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about configured OpenSearch Serverless security policies.</td>
</tr>
<tr>
    <td><a href="#create_security_policy"><CopyableCode code="create_security_policy" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-policy"><code>policy</code></a></td>
    <td></td>
    <td>Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#update_security_policy"><CopyableCode code="update_security_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-policyVersion"><code>policyVersion</code></a></td>
    <td></td>
    <td>Updates an OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.</td>
</tr>
<tr>
    <td><a href="#delete_security_policy"><CopyableCode code="delete_security_policy" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an OpenSearch Serverless security policy.</td>
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
    defaultValue="get_security_policy"
    values={[
        { label: 'get_security_policy', value: 'get_security_policy' },
        { label: 'list_security_policies', value: 'list_security_policies' }
    ]}
>
<TabItem value="get_security_policy">

Returns information about a configured OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.

```sql
SELECT
name,
createdDate,
description,
lastModifiedDate,
policy,
policyVersion,
type_
FROM aws.opensearchserverless.security_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_security_policies">

Returns information about configured OpenSearch Serverless security policies.

```sql
SELECT
nextToken,
securityPolicySummaries
FROM aws.opensearchserverless.security_policies
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_security_policy"
    values={[
        { label: 'create_security_policy', value: 'create_security_policy' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_security_policy">

Creates a security policy to be used by one or more OpenSearch Serverless collections. Security policies provide access to a collection and its OpenSearch Dashboards endpoint from public networks or specific VPC endpoints. They also allow you to secure a collection with a KMS encryption key. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.

```sql
INSERT INTO aws.opensearchserverless.security_policies (
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
securityPolicyDetail
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: security_policies
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the security_policies resource.
    - name: type
      value: "{{ type }}"
      description: |
        The type of security policy.
      valid_values: ['encryption', 'network']
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
        The JSON policy document to use as the content for the new policy.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        Unique, case-sensitive identifier to ensure idempotency of the request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_security_policy"
    values={[
        { label: 'update_security_policy', value: 'update_security_policy' }
    ]}
>
<TabItem value="update_security_policy">

Updates an OpenSearch Serverless security policy. For more information, see Network access for Amazon OpenSearch Serverless and Encryption at rest for Amazon OpenSearch Serverless.

```sql
UPDATE aws.opensearchserverless.security_policies
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
securityPolicyDetail;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_security_policy"
    values={[
        { label: 'delete_security_policy', value: 'delete_security_policy' }
    ]}
>
<TabItem value="delete_security_policy">

Deletes an OpenSearch Serverless security policy.

```sql
DELETE FROM aws.opensearchserverless.security_policies
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
