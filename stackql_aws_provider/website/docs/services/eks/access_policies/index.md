--- 
title: access_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - access_policies
  - eks
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.eks.access_policies" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_access_policies"
    values={[
        { label: 'list_access_policies', value: 'list_access_policies' }
    ]}
>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the access policy.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the access policy.</td>
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
    <td><a href="#list_access_policies"><CopyableCode code="list_access_policies" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the available access policies.</td>
</tr>
<tr>
    <td><a href="#associate_access_policy"><CopyableCode code="associate_access_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-principal_arn"><code>principal_arn</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyArn"><code>policyArn</code></a>, <a href="#parameter-accessScope"><code>accessScope</code></a></td>
    <td></td>
    <td>Associates an access policy and its scope to an access entry. For more information about associating access policies, see Associating and disassociating access policies to and from access entries in the Amazon EKS User Guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_access_policy"><CopyableCode code="disassociate_access_policy" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-principal_arn"><code>principal_arn</code></a>, <a href="#parameter-policy_arn"><code>policy_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates an access policy from an access entry.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of your cluster.</td>
</tr>
<tr id="parameter-policy_arn">
    <td><CopyableCode code="policy_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the policy to disassociate from the access entry. For a list of associated policies ARNs, use ListAssociatedAccessPolicies.</td>
</tr>
<tr id="parameter-principal_arn">
    <td><CopyableCode code="principal_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the IAM principal for the AccessEntry.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results, returned in paginated output. You receive maxResults in a single page, along with a nextToken response element. You can see the remaining results of the initial request by sending another request with the returned nextToken value. This value can be between 1 and 100. If you don't use this parameter, 100 results and a nextToken value, if applicable, are returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken value returned from a previous paginated request, where maxResults was used and the results exceeded the value of that parameter. Pagination continues from the end of the previous results that returned the nextToken value. This value is null when there are no more results to return. This token should be treated as an opaque identifier that is used only to retrieve the next items in a list and not for other programmatic purposes.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_access_policies"
    values={[
        { label: 'list_access_policies', value: 'list_access_policies' }
    ]}
>
<TabItem value="list_access_policies">

Lists the available access policies.

```sql
SELECT
name,
arn
FROM aws.eks.access_policies
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_access_policy"
    values={[
        { label: 'associate_access_policy', value: 'associate_access_policy' },
        { label: 'disassociate_access_policy', value: 'disassociate_access_policy' }
    ]}
>
<TabItem value="associate_access_policy">

Associates an access policy and its scope to an access entry. For more information about associating access policies, see Associating and disassociating access policies to and from access entries in the Amazon EKS User Guide.

```sql
UPDATE aws.eks.access_policies
SET 
policyArn = '{{ policyArn }}',
accessScope = '{{ accessScope }}'
WHERE 
name = '{{ name }}' --required
AND principal_arn = '{{ principal_arn }}' --required
AND region = '{{ region }}' --required
AND policyArn = '{{ policyArn }}' --required
AND accessScope = '{{ accessScope }}' --required
RETURNING
associatedAccessPolicy,
clusterName,
principalArn;
```
</TabItem>
<TabItem value="disassociate_access_policy">

Disassociates an access policy from an access entry.

```sql
UPDATE aws.eks.access_policies
SET 
-- No updatable properties
WHERE 
name = '{{ name }}' --required
AND principal_arn = '{{ principal_arn }}' --required
AND policy_arn = '{{ policy_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
