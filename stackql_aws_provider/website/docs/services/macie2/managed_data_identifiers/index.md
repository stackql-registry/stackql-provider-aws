--- 
title: managed_data_identifiers
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_data_identifiers
  - macie2
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

Creates, updates, deletes, gets or lists a <code>managed_data_identifiers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_data_identifiers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.managed_data_identifiers" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_managed_data_identifiers"
    values={[
        { label: 'list_managed_data_identifiers', value: 'list_managed_data_identifiers' }
    ]}
>
<TabItem value="list_managed_data_identifiers">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the managed data identifier. This is a string that describes the type of sensitive data that the managed data identifier detects. For example: OPENSSH_PRIVATE_KEY for OpenSSH private keys, CREDIT_CARD_NUMBER for credit card numbers, or USA_PASSPORT_NUMBER for US passport numbers.</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>The category of sensitive data that the managed data identifier detects: CREDENTIALS, for credentials data such as private keys or Amazon Web Services secret access keys; FINANCIAL_INFORMATION, for financial data such as credit card numbers; or, PERSONAL_INFORMATION, for personal health information, such as health insurance identification numbers, or personally identifiable information, such as passport numbers. (FINANCIAL_INFORMATION, PERSONAL_INFORMATION, CREDENTIALS, CUSTOM_IDENTIFIER)</td>
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
    <td><a href="#list_managed_data_identifiers"><CopyableCode code="list_managed_data_identifiers" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about all the managed data identifiers that Amazon Macie currently provides.</td>
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
    defaultValue="list_managed_data_identifiers"
    values={[
        { label: 'list_managed_data_identifiers', value: 'list_managed_data_identifiers' }
    ]}
>
<TabItem value="list_managed_data_identifiers">

Retrieves information about all the managed data identifiers that Amazon Macie currently provides.

```sql
SELECT
id,
category
FROM aws.macie2.managed_data_identifiers
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
