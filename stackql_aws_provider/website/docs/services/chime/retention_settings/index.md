--- 
title: retention_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - retention_settings
  - chime
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

Creates, updates, deletes, gets or lists a <code>retention_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="retention_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime.retention_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_retention_settings"
    values={[
        { label: 'get_retention_settings', value: 'get_retention_settings' }
    ]}
>
<TabItem value="get_retention_settings">

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
    <td><CopyableCode code="InitiateDeletionTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp representing the time at which the specified items are permanently deleted, in ISO 8601 format.</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionSettings" /></td>
    <td><code>object</code></td>
    <td>The retention settings.</td>
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
    <td><a href="#get_retention_settings"><CopyableCode code="get_retention_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.</td>
</tr>
<tr>
    <td><a href="#put_retention_settings"><CopyableCode code="put_retention_settings" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RetentionSettings"><code>RetentionSettings</code></a></td>
    <td></td>
    <td>Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see Logging Amazon Chime API Calls with AWS CloudTrail in the Amazon Chime Administration Guide. To turn off existing retention settings, remove the number of days from the corresponding RetentionDays field in the RetentionSettings object. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Chime account ID.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_retention_settings"
    values={[
        { label: 'get_retention_settings', value: 'get_retention_settings' }
    ]}
>
<TabItem value="get_retention_settings">

Gets the retention settings for the specified Amazon Chime Enterprise account. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.

```sql
SELECT
InitiateDeletionTimestamp,
RetentionSettings
FROM aws.chime.retention_settings
WHERE account_id = '{{ account_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_retention_settings"
    values={[
        { label: 'put_retention_settings', value: 'put_retention_settings' }
    ]}
>
<TabItem value="put_retention_settings">

Puts retention settings for the specified Amazon Chime Enterprise account. We recommend using AWS CloudTrail to monitor usage of this API for your account. For more information, see Logging Amazon Chime API Calls with AWS CloudTrail in the Amazon Chime Administration Guide. To turn off existing retention settings, remove the number of days from the corresponding RetentionDays field in the RetentionSettings object. For more information about retention settings, see Managing Chat Retention Policies in the Amazon Chime Administration Guide.

```sql
REPLACE aws.chime.retention_settings
SET 
RetentionSettings = '{{ RetentionSettings }}'
WHERE 
account_id = '{{ account_id }}' --required
AND region = '{{ region }}' --required
AND RetentionSettings = '{{ RetentionSettings }}' --required
RETURNING
InitiateDeletionTimestamp,
RetentionSettings;
```
</TabItem>
</Tabs>
