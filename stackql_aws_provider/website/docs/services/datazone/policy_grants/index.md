--- 
title: policy_grants
hide_title: false
hide_table_of_contents: false
keywords:
  - policy_grants
  - datazone
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

Creates, updates, deletes, gets or lists a <code>policy_grants</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policy_grants" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.policy_grants" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_policy_grants"
    values={[
        { label: 'list_policy_grants', value: 'list_policy_grants' }
    ]}
>
<TabItem value="list_policy_grants">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Specifies the timestamp at which policy grant member was created.</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Specifies the user who created the policy grant member.</td>
</tr>
<tr>
    <td><CopyableCode code="detail" /></td>
    <td><code>object</code></td>
    <td>The details of the policy grant.</td>
</tr>
<tr>
    <td><CopyableCode code="grant_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the policy grant. (pattern: &lt;code&gt;&#91;A-Za-z0-9+/&#93;&#123;10&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="principal" /></td>
    <td><code>object</code></td>
    <td>The policy grant principal.</td>
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
    <td><a href="#list_policy_grants"><CopyableCode code="list_policy_grants" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-policyType"><code>policyType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists policy grants.</td>
</tr>
<tr>
    <td><a href="#add_policy_grant"><CopyableCode code="add_policy_grant" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyType"><code>policyType</code></a>, <a href="#parameter-principal"><code>principal</code></a>, <a href="#parameter-detail"><code>detail</code></a></td>
    <td></td>
    <td>Adds a policy grant (an authorization policy) to a specified entity, including domain units, environment blueprint configurations, or environment profiles.</td>
</tr>
<tr>
    <td><a href="#remove_policy_grant"><CopyableCode code="remove_policy_grant" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-entity_type"><code>entity_type</code></a>, <a href="#parameter-entity_identifier"><code>entity_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-policyType"><code>policyType</code></a>, <a href="#parameter-principal"><code>principal</code></a></td>
    <td></td>
    <td>Removes a policy grant.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain where you want to remove a policy grant.</td>
</tr>
<tr id="parameter-entity_identifier">
    <td><CopyableCode code="entity_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the entity from which you want to remove a policy grant.</td>
</tr>
<tr id="parameter-entity_type">
    <td><CopyableCode code="entity_type" /></td>
    <td><code>string</code></td>
    <td>The type of the entity from which you want to remove a policy grant.</td>
</tr>
<tr id="parameter-policyType">
    <td><CopyableCode code="policyType" /></td>
    <td><code>string</code></td>
    <td>The type of policy that you want to list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of grants to return in a single call to ListPolicyGrants. When the number of grants to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListPolicyGrants to list the next set of grants.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of grants is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of grants, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListPolicyGrants to list the next set of grants.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_policy_grants"
    values={[
        { label: 'list_policy_grants', value: 'list_policy_grants' }
    ]}
>
<TabItem value="list_policy_grants">

Lists policy grants.

```sql
SELECT
created_at,
created_by,
detail,
grant_id,
principal
FROM aws.datazone.policy_grants
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND entity_type = '{{ entity_type }}' -- required
AND entity_identifier = '{{ entity_identifier }}' -- required
AND policyType = '{{ policyType }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_policy_grant"
    values={[
        { label: 'add_policy_grant', value: 'add_policy_grant' },
        { label: 'remove_policy_grant', value: 'remove_policy_grant' }
    ]}
>
<TabItem value="add_policy_grant">

Adds a policy grant (an authorization policy) to a specified entity, including domain units, environment blueprint configurations, or environment profiles.

```sql
UPDATE aws.datazone.policy_grants
SET 
policyType = '{{ policyType }}',
principal = '{{ principal }}',
detail = '{{ detail }}',
clientToken = '{{ clientToken }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND entity_type = '{{ entity_type }}' --required
AND entity_identifier = '{{ entity_identifier }}' --required
AND region = '{{ region }}' --required
AND policyType = '{{ policyType }}' --required
AND principal = '{{ principal }}' --required
AND detail = '{{ detail }}' --required
RETURNING
grant_id;
```
</TabItem>
<TabItem value="remove_policy_grant">

Removes a policy grant.

```sql
UPDATE aws.datazone.policy_grants
SET 
policyType = '{{ policyType }}',
principal = '{{ principal }}',
grantIdentifier = '{{ grantIdentifier }}',
clientToken = '{{ clientToken }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND entity_type = '{{ entity_type }}' --required
AND entity_identifier = '{{ entity_identifier }}' --required
AND region = '{{ region }}' --required
AND policyType = '{{ policyType }}' --required
AND principal = '{{ principal }}' --required;
```
</TabItem>
</Tabs>
