--- 
title: service_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - service_settings
  - license_manager_linux_subscriptions
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

Creates, updates, deletes, gets or lists a <code>service_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager_linux_subscriptions.service_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_service_settings"
    values={[
        { label: 'get_service_settings', value: 'get_service_settings' }
    ]}
>
<TabItem value="get_service_settings">

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
    <td><CopyableCode code="home_regions" /></td>
    <td><code>array</code></td>
    <td>The Region in which License Manager displays the aggregated data for Linux subscriptions.</td>
</tr>
<tr>
    <td><CopyableCode code="linux_subscriptions_discovery" /></td>
    <td><code>string</code></td>
    <td>Lists if discovery has been enabled for Linux subscriptions. (Enabled, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="linux_subscriptions_discovery_settings" /></td>
    <td><code>object</code></td>
    <td>Lists the settings defined for Linux subscriptions discovery. The settings include if Organizations integration has been enabled, and which Regions data will be aggregated from.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of Linux subscriptions settings being applied. (InProgress, Completed, Successful, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>object</code></td>
    <td>A message which details the Linux subscriptions service settings current status.</td>
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
    <td><a href="#get_service_settings"><CopyableCode code="get_service_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Linux subscriptions service settings for your account.</td>
</tr>
<tr>
    <td><a href="#update_service_settings"><CopyableCode code="update_service_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LinuxSubscriptionsDiscovery"><code>LinuxSubscriptionsDiscovery</code></a>, <a href="#parameter-LinuxSubscriptionsDiscoverySettings"><code>LinuxSubscriptionsDiscoverySettings</code></a></td>
    <td></td>
    <td>Updates the service settings for Linux subscriptions.</td>
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
    defaultValue="get_service_settings"
    values={[
        { label: 'get_service_settings', value: 'get_service_settings' }
    ]}
>
<TabItem value="get_service_settings">

Lists the Linux subscriptions service settings for your account.

```sql
SELECT
home_regions,
linux_subscriptions_discovery,
linux_subscriptions_discovery_settings,
status,
status_message
FROM aws.license_manager_linux_subscriptions.service_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_settings"
    values={[
        { label: 'update_service_settings', value: 'update_service_settings' }
    ]}
>
<TabItem value="update_service_settings">

Updates the service settings for Linux subscriptions.

```sql
UPDATE aws.license_manager_linux_subscriptions.service_settings
SET 
AllowUpdate = {{ AllowUpdate }},
LinuxSubscriptionsDiscovery = '{{ LinuxSubscriptionsDiscovery }}',
LinuxSubscriptionsDiscoverySettings = '{{ LinuxSubscriptionsDiscoverySettings }}'
WHERE 
region = '{{ region }}' --required
AND LinuxSubscriptionsDiscovery = '{{ LinuxSubscriptionsDiscovery }}' --required
AND LinuxSubscriptionsDiscoverySettings = '{{ LinuxSubscriptionsDiscoverySettings }}' --required
RETURNING
home_regions,
linux_subscriptions_discovery,
linux_subscriptions_discovery_settings,
status,
status_message;
```
</TabItem>
</Tabs>
