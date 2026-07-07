--- 
title: iam_portal_login_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - iam_portal_login_urls
  - datazone
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

Creates, updates, deletes, gets or lists an <code>iam_portal_login_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="iam_portal_login_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.iam_portal_login_urls" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_iam_portal_login_url"
    values={[
        { label: 'get_iam_portal_login_url', value: 'get_iam_portal_login_url' }
    ]}
>
<TabItem value="get_iam_portal_login_url">

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
    <td><CopyableCode code="authCodeUrl" /></td>
    <td><code>string</code></td>
    <td>The data portal URL of the specified Amazon DataZone domain.</td>
</tr>
<tr>
    <td><CopyableCode code="userProfileId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user profile.</td>
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
    <td><a href="#get_iam_portal_login_url"><CopyableCode code="get_iam_portal_login_url" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the data portal URL for the specified Amazon DataZone domain.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>the ID of the Amazon DataZone domain the data portal of which you want to get.</td>
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
    defaultValue="get_iam_portal_login_url"
    values={[
        { label: 'get_iam_portal_login_url', value: 'get_iam_portal_login_url' }
    ]}
>
<TabItem value="get_iam_portal_login_url">

Gets the data portal URL for the specified Amazon DataZone domain.

```sql
SELECT
authCodeUrl,
userProfileId
FROM aws.datazone.iam_portal_login_urls
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
