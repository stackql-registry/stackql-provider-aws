--- 
title: access_key_last_useds
hide_title: false
hide_table_of_contents: false
keywords:
  - access_key_last_useds
  - iam
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

Creates, updates, deletes, gets or lists an <code>access_key_last_useds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_key_last_useds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iam.access_key_last_useds" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_access_key_last_used"
    values={[
        { label: 'get_access_key_last_used', value: 'get_access_key_last_used' }
    ]}
>
<TabItem value="get_access_key_last_used">

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
    <td><CopyableCode code="last_used_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 date-time format, when the access key was most recently used. This field is null in the following situations: The user does not have an access key. An access key exists but has not been used since IAM began tracking this information. There is no sign-in data associated with the user.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region where this access key was most recently used. The value for this field is "N/A" in the following situations: The user does not have an access key. An access key exists but has not been used since IAM began tracking this information. There is no sign-in data associated with the user. For more information about Amazon Web Services Regions, see Regions and endpoints in the Amazon Web Services General Reference.</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of the Amazon Web Services service with which this access key was most recently used. The value of this field is "N/A" in the following situations: The user does not have an access key. An access key exists but has not been used since IAM started tracking this information. There is no sign-in data associated with the user.</td>
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
    <td><a href="#get_access_key_last_used"><CopyableCode code="get_access_key_last_used" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-AccessKeyId"><code>AccessKeyId</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.</td>
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
<tr id="parameter-AccessKeyId">
    <td><CopyableCode code="AccessKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of an access key. This parameter allows (through its regex pattern) a string of characters that can consist of any upper or lowercased letter or digit.</td>
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
    defaultValue="get_access_key_last_used"
    values={[
        { label: 'get_access_key_last_used', value: 'get_access_key_last_used' }
    ]}
>
<TabItem value="get_access_key_last_used">

Retrieves information about when the specified access key was last used. The information includes the date and time of last use, along with the Amazon Web Services service and Region that were specified in the last request made with that key.

```sql
SELECT
last_used_date,
region,
service_name
FROM aws.iam.access_key_last_useds
WHERE AccessKeyId = '{{ AccessKeyId }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
