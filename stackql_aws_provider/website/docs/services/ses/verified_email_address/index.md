--- 
title: verified_email_address
hide_title: false
hide_table_of_contents: false
keywords:
  - verified_email_address
  - ses
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

Creates, updates, deletes, gets or lists a <code>verified_email_address</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="verified_email_address" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ses.verified_email_address" /></td></tr>
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
    <td><a href="#delete_verified_email_address"><CopyableCode code="delete_verified_email_address" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-EmailAddress"><code>EmailAddress</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deprecated. Use the DeleteIdentity operation to delete email addresses and domains.</td>
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
<tr id="parameter-EmailAddress">
    <td><CopyableCode code="EmailAddress" /></td>
    <td><code>string</code></td>
    <td>An email address to be removed from the list of verified addresses.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `DELETE` examples

<Tabs
    defaultValue="delete_verified_email_address"
    values={[
        { label: 'delete_verified_email_address', value: 'delete_verified_email_address' }
    ]}
>
<TabItem value="delete_verified_email_address">

Deprecated. Use the DeleteIdentity operation to delete email addresses and domains.

```sql
DELETE FROM aws.ses.verified_email_address
WHERE EmailAddress = '{{ EmailAddress }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
