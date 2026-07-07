--- 
title: memberships
hide_title: false
hide_table_of_contents: false
keywords:
  - memberships
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>memberships</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="memberships" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.memberships" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_memberships"
    values={[
        { label: 'list_memberships', value: 'list_memberships' }
    ]}
>
<TabItem value="list_memberships">

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
    <td><CopyableCode code="agentSpaceId" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the agent space.</td>
</tr>
<tr>
    <td><CopyableCode code="applicationId" /></td>
    <td><code>string</code></td>
    <td>Application identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="config" /></td>
    <td><code>object</code></td>
    <td>The configuration for a membership. This is a union type that contains member-type-specific configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the membership was created, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the entity that created the membership.</td>
</tr>
<tr>
    <td><CopyableCode code="memberType" /></td>
    <td><code>string</code></td>
    <td>Type of membership. (USER)</td>
</tr>
<tr>
    <td><CopyableCode code="membershipId" /></td>
    <td><code>string</code></td>
    <td>Member identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>The metadata for the member.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the membership was last updated, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The identifier of the entity that last updated the membership.</td>
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
    <td><a href="#list_memberships"><CopyableCode code="list_memberships" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a paginated list of membership summaries for the specified agent space within an application.</td>
</tr>
<tr>
    <td><a href="#create_membership"><CopyableCode code="create_membership" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-applicationId"><code>applicationId</code></a>, <a href="#parameter-agentSpaceId"><code>agentSpaceId</code></a>, <a href="#parameter-membershipId"><code>membershipId</code></a>, <a href="#parameter-memberType"><code>memberType</code></a></td>
    <td></td>
    <td>Creates a new membership, granting a user access to an agent space within an application.</td>
</tr>
<tr>
    <td><a href="#delete_membership"><CopyableCode code="delete_membership" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a membership, revoking a user's access to an agent space.</td>
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
    defaultValue="list_memberships"
    values={[
        { label: 'list_memberships', value: 'list_memberships' }
    ]}
>
<TabItem value="list_memberships">

Returns a paginated list of membership summaries for the specified agent space within an application.

```sql
SELECT
agentSpaceId,
applicationId,
config,
createdAt,
createdBy,
memberType,
membershipId,
metadata,
updatedAt,
updatedBy
FROM aws.securityagent.memberships
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_membership"
    values={[
        { label: 'create_membership', value: 'create_membership' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_membership">

Creates a new membership, granting a user access to an agent space within an application.

```sql
INSERT INTO aws.securityagent.memberships (
applicationId,
agentSpaceId,
membershipId,
memberType,
config,
region
)
SELECT 
'{{ applicationId }}' /* required */,
'{{ agentSpaceId }}' /* required */,
'{{ membershipId }}' /* required */,
'{{ memberType }}' /* required */,
'{{ config }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: memberships
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the memberships resource.
    - name: applicationId
      value: "{{ applicationId }}"
      description: |
        Application identifier.
    - name: agentSpaceId
      value: "{{ agentSpaceId }}"
      description: |
        Unique identifier of the agent space.
    - name: membershipId
      value: "{{ membershipId }}"
      description: |
        Member identifier.
    - name: memberType
      value: "{{ memberType }}"
      description: |
        Type of membership.
      valid_values: ['USER']
    - name: config
      description: |
        The configuration for a membership. This is a union type that contains member-type-specific configuration.
      value:
        user:
          role: "{{ role }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_membership"
    values={[
        { label: 'delete_membership', value: 'delete_membership' }
    ]}
>
<TabItem value="delete_membership">

Deletes a membership, revoking a user's access to an agent space.

```sql
DELETE FROM aws.securityagent.memberships
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
