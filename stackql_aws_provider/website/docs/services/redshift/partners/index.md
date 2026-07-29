--- 
title: partners
hide_title: false
hide_table_of_contents: false
keywords:
  - partners
  - redshift
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

Creates, updates, deletes, gets or lists a <code>partners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift.partners" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_partners"
    values={[
        { label: 'describe_partners', value: 'describe_partners' }
    ]}
>
<TabItem value="describe_partners">

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
    <td><code>string</code></td>
    <td>The date (UTC) that the partner integration was created.</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>The name of the database that receives data from a partner.</td>
</tr>
<tr>
    <td><CopyableCode code="partner_name" /></td>
    <td><code>string</code></td>
    <td>The name of the partner.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The partner integration status.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>The status message provided by the partner.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string</code></td>
    <td>The date (UTC) that the partner integration status was last updated by the partner.</td>
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
    <td><a href="#describe_partners"><CopyableCode code="describe_partners" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-PartnerName"><code>PartnerName</code></a></td>
    <td>Returns information about the partner integrations defined for a cluster.</td>
</tr>
<tr>
    <td><a href="#add_partner"><CopyableCode code="add_partner" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-PartnerName"><code>PartnerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.</td>
</tr>
<tr>
    <td><a href="#delete_partner"><CopyableCode code="delete_partner" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-PartnerName"><code>PartnerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.</td>
</tr>
<tr>
    <td><a href="#update_partner_status"><CopyableCode code="update_partner_status" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-AccountId"><code>AccountId</code></a>, <a href="#parameter-ClusterIdentifier"><code>ClusterIdentifier</code></a>, <a href="#parameter-DatabaseName"><code>DatabaseName</code></a>, <a href="#parameter-PartnerName"><code>PartnerName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Status"><code>Status</code></a>, <a href="#parameter-StatusMessage"><code>StatusMessage</code></a></td>
    <td>Updates the status of a partner integration.</td>
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
<tr id="parameter-AccountId">
    <td><CopyableCode code="AccountId" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the cluster.</td>
</tr>
<tr id="parameter-ClusterIdentifier">
    <td><CopyableCode code="ClusterIdentifier" /></td>
    <td><code>string</code></td>
    <td>The cluster identifier of the cluster whose partner integration status is being updated.</td>
</tr>
<tr id="parameter-DatabaseName">
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the database whose partner integration status is being updated.</td>
</tr>
<tr id="parameter-PartnerName">
    <td><CopyableCode code="PartnerName" /></td>
    <td><code>string</code></td>
    <td>The name of the partner whose integration status is being updated.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DatabaseName">
    <td><CopyableCode code="DatabaseName" /></td>
    <td><code>string</code></td>
    <td>The name of the database whose partner integration is being described. If database name is not specified, then all databases in the cluster are described.</td>
</tr>
<tr id="parameter-PartnerName">
    <td><CopyableCode code="PartnerName" /></td>
    <td><code>string</code></td>
    <td>The name of the partner that is being described. If partner name is not specified, then all partner integrations are described.</td>
</tr>
<tr id="parameter-Status">
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The value of the updated status.</td>
</tr>
<tr id="parameter-StatusMessage">
    <td><CopyableCode code="StatusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message provided by the partner.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_partners"
    values={[
        { label: 'describe_partners', value: 'describe_partners' }
    ]}
>
<TabItem value="describe_partners">

Returns information about the partner integrations defined for a cluster.

```sql
SELECT
created_at,
database_name,
partner_name,
status,
status_message,
updated_at
FROM aws.redshift.partners
WHERE AccountId = '{{ AccountId }}' -- required
AND ClusterIdentifier = '{{ ClusterIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND DatabaseName = '{{ DatabaseName }}'
AND PartnerName = '{{ PartnerName }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="add_partner"
    values={[
        { label: 'add_partner', value: 'add_partner' }
    ]}
>
<TabItem value="add_partner">

Adds a partner integration to a cluster. This operation authorizes a partner to push status updates for the specified database. To complete the integration, you also set up the integration on the partner website.

```sql
UPDATE aws.redshift.partners
SET 
-- No updatable properties
WHERE 
AccountId = '{{ AccountId }}' --required
AND ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND PartnerName = '{{ PartnerName }}' --required
AND region = '{{ region }}' --required
RETURNING
database_name,
partner_name;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_partner"
    values={[
        { label: 'delete_partner', value: 'delete_partner' }
    ]}
>
<TabItem value="delete_partner">

Deletes a partner integration from a cluster. Data can still flow to the cluster until the integration is deleted at the partner's website.

```sql
DELETE FROM aws.redshift.partners
WHERE AccountId = '{{ AccountId }}' --required
AND ClusterIdentifier = '{{ ClusterIdentifier }}' --required
AND DatabaseName = '{{ DatabaseName }}' --required
AND PartnerName = '{{ PartnerName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_partner_status"
    values={[
        { label: 'update_partner_status', value: 'update_partner_status' }
    ]}
>
<TabItem value="update_partner_status">

Updates the status of a partner integration.

```sql
EXEC aws.redshift.partners.update_partner_status 
@AccountId='{{ AccountId }}' --required, 
@ClusterIdentifier='{{ ClusterIdentifier }}' --required, 
@DatabaseName='{{ DatabaseName }}' --required, 
@PartnerName='{{ PartnerName }}' --required, 
@region='{{ region }}' --required, 
@Status='{{ Status }}', 
@StatusMessage='{{ StatusMessage }}'
;
```
</TabItem>
</Tabs>
