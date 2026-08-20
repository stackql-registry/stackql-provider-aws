--- 
title: acme_external_account_binding_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - acme_external_account_binding_credentials
  - acm
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

Creates, updates, deletes, gets or lists an <code>acme_external_account_binding_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acme_external_account_binding_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.acme_external_account_binding_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_acme_external_account_binding_credentials"
    values={[
        { label: 'get_acme_external_account_binding_credentials', value: 'get_acme_external_account_binding_credentials' }
    ]}
>
<TabItem value="get_acme_external_account_binding_credentials">

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
    <td><CopyableCode code="key_id" /></td>
    <td><code>string</code></td>
    <td>The key identifier for the external account binding credentials.</td>
</tr>
<tr>
    <td><CopyableCode code="mac_key" /></td>
    <td><code>string</code></td>
    <td>The MAC key for the external account binding credentials.</td>
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
    <td><a href="#get_acme_external_account_binding_credentials"><CopyableCode code="get_acme_external_account_binding_credentials" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by ACME clients during account registration to bind to the endpoint.</td>
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
    defaultValue="get_acme_external_account_binding_credentials"
    values={[
        { label: 'get_acme_external_account_binding_credentials', value: 'get_acme_external_account_binding_credentials' }
    ]}
>
<TabItem value="get_acme_external_account_binding_credentials">

Retrieves the key ID and MAC key credentials for an external account binding. These credentials are used by ACME clients during account registration to bind to the endpoint.

```sql
SELECT
key_id,
mac_key
FROM aws.acm.acme_external_account_binding_credentials
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
