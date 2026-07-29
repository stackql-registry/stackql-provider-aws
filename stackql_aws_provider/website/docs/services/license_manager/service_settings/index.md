--- 
title: service_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - service_settings
  - license_manager
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.license_manager.service_settings" /></td></tr>
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
    <td><CopyableCode code="cross_region_discovery_home_region" /></td>
    <td><code>string</code></td>
    <td>Cross region discovery home region.</td>
</tr>
<tr>
    <td><CopyableCode code="cross_region_discovery_source_regions" /></td>
    <td><code>array</code></td>
    <td>Cross region discovery source regions.</td>
</tr>
<tr>
    <td><CopyableCode code="enable_cross_accounts_discovery" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether cross-account discovery is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="license_manager_resource_share_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the resource share. The License Manager management account provides member accounts with access to this share.</td>
</tr>
<tr>
    <td><CopyableCode code="organization_configuration" /></td>
    <td><code>object</code></td>
    <td>Indicates whether Organizations is integrated with License Manager for cross-account discovery.</td>
</tr>
<tr>
    <td><CopyableCode code="s3_bucket_arn" /></td>
    <td><code>string</code></td>
    <td>Regional S3 bucket path for storing reports, license trail event data, discovery data, and so on.</td>
</tr>
<tr>
    <td><CopyableCode code="service_status" /></td>
    <td><code>object</code></td>
    <td>Service status.</td>
</tr>
<tr>
    <td><CopyableCode code="sns_topic_arn" /></td>
    <td><code>string</code></td>
    <td>SNS topic configured to receive notifications from License Manager.</td>
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
    <td>Gets the License Manager settings for the current Region.</td>
</tr>
<tr>
    <td><a href="#update_service_settings"><CopyableCode code="update_service_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates License Manager settings for the current Region.</td>
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

Gets the License Manager settings for the current Region.

```sql
SELECT
cross_region_discovery_home_region,
cross_region_discovery_source_regions,
enable_cross_accounts_discovery,
license_manager_resource_share_arn,
organization_configuration,
s3_bucket_arn,
service_status,
sns_topic_arn
FROM aws.license_manager.service_settings
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

Updates License Manager settings for the current Region.

```sql
UPDATE aws.license_manager.service_settings
SET 
S3BucketArn = '{{ S3BucketArn }}',
SnsTopicArn = '{{ SnsTopicArn }}',
OrganizationConfiguration = '{{ OrganizationConfiguration }}',
EnableCrossAccountsDiscovery = {{ EnableCrossAccountsDiscovery }},
EnabledDiscoverySourceRegions = '{{ EnabledDiscoverySourceRegions }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
