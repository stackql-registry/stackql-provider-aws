--- 
title: profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - profiles
  - lightsail
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

Creates, updates, deletes, gets or lists a <code>profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lightsail.profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' }
    ]}
>
<TabItem value="get_profile">

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
    <td><CopyableCode code="partner" /></td>
    <td><code>object</code></td>
    <td>An object that describes the partner membership of the account, such as the tier of the membership, its status, and when the account was enrolled. This parameter is returned only for accounts that have a profileType of LightsailPartner.</td>
</tr>
<tr>
    <td><CopyableCode code="profile_type" /></td>
    <td><code>string</code></td>
    <td>The type of the profile. The following profile types are possible: Lightsailor – The account is not enrolled in the Lightsail partner program. LightsailPartner – The account is enrolled in the Lightsail partner program. (Lightsailor, LightsailPartner)</td>
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
    <td><a href="#get_profile"><CopyableCode code="get_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the profile of the Amazon Lightsail account that makes the request. The response includes the profile type and, for accounts enrolled in the Lightsail partner program, the partner membership details.</td>
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
    defaultValue="get_profile"
    values={[
        { label: 'get_profile', value: 'get_profile' }
    ]}
>
<TabItem value="get_profile">

Returns information about the profile of the Amazon Lightsail account that makes the request. The response includes the profile type and, for accounts enrolled in the Lightsail partner program, the partner membership details.

```sql
SELECT
partner,
profile_type
FROM aws.lightsail.profiles
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
