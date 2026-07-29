--- 
title: mpa_teams
hide_title: false
hide_table_of_contents: false
keywords:
  - mpa_teams
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

Creates, updates, deletes, gets or lists a <code>mpa_teams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mpa_teams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.mpa_teams" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#associate_mpa_team"><CopyableCode code="associate_mpa_team" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Action"><code>Action</code></a>, <a href="#parameter-MpaTeamArn"><code>MpaTeamArn</code></a></td>
    <td></td>
    <td>Associates a Multi-Party Approval (MPA) team with a protected operation. For more information, see Multi-Party Approval in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DisassociateMpaTeam GetMpaTeamAssociation</td>
</tr>
<tr>
    <td><a href="#disassociate_mpa_team"><CopyableCode code="disassociate_mpa_team" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Action"><code>Action</code></a></td>
    <td></td>
    <td>Removes the association between a Multi-Party Approval (MPA) team and a protected operation. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: AssociateMpaTeam GetMpaTeamAssociation</td>
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

## `UPDATE` examples

<Tabs
    defaultValue="associate_mpa_team"
    values={[
        { label: 'associate_mpa_team', value: 'associate_mpa_team' },
        { label: 'disassociate_mpa_team', value: 'disassociate_mpa_team' }
    ]}
>
<TabItem value="associate_mpa_team">

Associates a Multi-Party Approval (MPA) team with a protected operation. For more information, see Multi-Party Approval in the Amazon Web Services Payment Cryptography User Guide. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: DisassociateMpaTeam GetMpaTeamAssociation

```sql
UPDATE aws.payment_cryptography.mpa_teams
SET 
Action = '{{ Action }}',
MpaTeamArn = '{{ MpaTeamArn }}',
RequesterComment = '{{ RequesterComment }}'
WHERE 
region = '{{ region }}' --required
AND Action = '{{ Action }}' --required
AND MpaTeamArn = '{{ MpaTeamArn }}' --required
RETURNING
mpa_team_association;
```
</TabItem>
<TabItem value="disassociate_mpa_team">

Removes the association between a Multi-Party Approval (MPA) team and a protected operation. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: AssociateMpaTeam GetMpaTeamAssociation

```sql
UPDATE aws.payment_cryptography.mpa_teams
SET 
Action = '{{ Action }}',
RequesterComment = '{{ RequesterComment }}'
WHERE 
region = '{{ region }}' --required
AND Action = '{{ Action }}' --required
RETURNING
mpa_team_association;
```
</TabItem>
</Tabs>
