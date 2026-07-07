--- 
title: pool_origination_identities
hide_title: false
hide_table_of_contents: false
keywords:
  - pool_origination_identities
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>pool_origination_identities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="pool_origination_identities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.pool_origination_identities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_pool_origination_identities"
    values={[
        { label: 'list_pool_origination_identities', value: 'list_pool_origination_identities' }
    ]}
>
<TabItem value="list_pool_origination_identities">

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
    <td><CopyableCode code="IsoCountryCode" /></td>
    <td><code>string</code></td>
    <td>The two-character code, in ISO 3166-1 alpha-2 format, for the country or region. This field is optional and may not be present for origination identity types that are not country-specific, such as RCS agents. (pattern: &lt;code&gt;&#91;A-Z&#93;&#123;2&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="NumberCapabilities" /></td>
    <td><code>array</code></td>
    <td>Describes if the origination identity can be used for text messages, voice calls or both.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginationIdentity" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the origination identity.</td>
</tr>
<tr>
    <td><CopyableCode code="OriginationIdentityArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) associated with the origination identity.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number in E.164 format. (pattern: &lt;code&gt;\+?&#91;1-9&#93;&#91;0-9&#93;&#123;1,18&#125;&lt;/code&gt;)</td>
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
    <td><a href="#list_pool_origination_identities"><CopyableCode code="list_pool_origination_identities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all associated origination identities in your pool. If you specify filters, the output includes information for only those origination identities that meet the filter criteria.</td>
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
    defaultValue="list_pool_origination_identities"
    values={[
        { label: 'list_pool_origination_identities', value: 'list_pool_origination_identities' }
    ]}
>
<TabItem value="list_pool_origination_identities">

Lists all associated origination identities in your pool. If you specify filters, the output includes information for only those origination identities that meet the filter criteria.

```sql
SELECT
IsoCountryCode,
NumberCapabilities,
OriginationIdentity,
OriginationIdentityArn,
PhoneNumber
FROM aws.pinpoint_sms_voice_v2.pool_origination_identities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
