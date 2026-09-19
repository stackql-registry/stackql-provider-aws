--- 
title: notifications_accesses
hide_title: false
hide_table_of_contents: false
keywords:
  - notifications_accesses
  - notifications
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

Creates, updates, deletes, gets or lists a <code>notifications_accesses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="notifications_accesses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.notifications.notifications_accesses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_notifications_access_for_organization"
    values={[
        { label: 'get_notifications_access_for_organization', value: 'get_notifications_access_for_organization' }
    ]}
>
<TabItem value="get_notifications_access_for_organization">

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
    <td><CopyableCode code="access_status" /></td>
    <td><code>string</code></td>
    <td>Access Status for the Orgs Service. (ENABLED, DISABLED, PENDING, FAILED)</td>
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
    <td><a href="#get_notifications_access_for_organization"><CopyableCode code="get_notifications_access_for_organization" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the AccessStatus of Service Trust Enablement for User Notifications and Amazon Web Services Organizations.</td>
</tr>
<tr>
    <td><a href="#disable_notifications_access_for_organization"><CopyableCode code="disable_notifications_access_for_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables service trust between User Notifications and Amazon Web Services Organizations.</td>
</tr>
<tr>
    <td><a href="#enable_notifications_access_for_organization"><CopyableCode code="enable_notifications_access_for_organization" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables service trust between User Notifications and Amazon Web Services Organizations.</td>
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
    defaultValue="get_notifications_access_for_organization"
    values={[
        { label: 'get_notifications_access_for_organization', value: 'get_notifications_access_for_organization' }
    ]}
>
<TabItem value="get_notifications_access_for_organization">

Returns the AccessStatus of Service Trust Enablement for User Notifications and Amazon Web Services Organizations.

```sql
SELECT
access_status
FROM aws.notifications.notifications_accesses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disable_notifications_access_for_organization"
    values={[
        { label: 'disable_notifications_access_for_organization', value: 'disable_notifications_access_for_organization' },
        { label: 'enable_notifications_access_for_organization', value: 'enable_notifications_access_for_organization' }
    ]}
>
<TabItem value="disable_notifications_access_for_organization">

Disables service trust between User Notifications and Amazon Web Services Organizations.

```sql
EXEC aws.notifications.notifications_accesses.disable_notifications_access_for_organization 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="enable_notifications_access_for_organization">

Enables service trust between User Notifications and Amazon Web Services Organizations.

```sql
EXEC aws.notifications.notifications_accesses.enable_notifications_access_for_organization 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
