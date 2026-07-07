--- 
title: mpa_team_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - mpa_team_associations
  - payment_cryptography
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

Creates, updates, deletes, gets or lists a <code>mpa_team_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mpa_team_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.mpa_team_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mpa_team_association"
    values={[
        { label: 'get_mpa_team_association', value: 'get_mpa_team_association' }
    ]}
>
<TabItem value="get_mpa_team_association">

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
    <td><CopyableCode code="Action" /></td>
    <td><code>string</code></td>
    <td>The protected operation associated with the MPA team. (IMPORT_ROOT_PUBLIC_KEY_CERTIFICATE)</td>
</tr>
<tr>
    <td><CopyableCode code="AssociationState" /></td>
    <td><code>string</code></td>
    <td>The state of the MPA team association. (ACTIVE, UPDATE_PENDING, DELETE_PENDING)</td>
</tr>
<tr>
    <td><CopyableCode code="MpaStatus" /></td>
    <td><code>object</code></td>
    <td>The MPA session status for the association, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="MpaTeamArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the MPA team. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:mpa:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:approval-team/&#91;a-zA-Z0-9._-&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_mpa_team_association"><CopyableCode code="get_mpa_team_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Multi-Party Approval (MPA) team association for a protected operation. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: AssociateMpaTeam DisassociateMpaTeam</td>
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
    defaultValue="get_mpa_team_association"
    values={[
        { label: 'get_mpa_team_association', value: 'get_mpa_team_association' }
    ]}
>
<TabItem value="get_mpa_team_association">

Returns the Multi-Party Approval (MPA) team association for a protected operation. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: AssociateMpaTeam DisassociateMpaTeam

```sql
SELECT
Action,
AssociationState,
MpaStatus,
MpaTeamArn
FROM aws.payment_cryptography.mpa_team_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
