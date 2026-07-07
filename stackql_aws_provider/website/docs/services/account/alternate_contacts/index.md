--- 
title: alternate_contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - alternate_contacts
  - account
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

Creates, updates, deletes, gets or lists an <code>alternate_contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alternate_contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account.alternate_contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alternate_contact"
    values={[
        { label: 'get_alternate_contact', value: 'get_alternate_contact' }
    ]}
>
<TabItem value="get_alternate_contact">

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
    <td><CopyableCode code="AlternateContactType" /></td>
    <td><code>string</code></td>
    <td>The type of alternate contact. (BILLING, OPERATIONS, SECURITY)</td>
</tr>
<tr>
    <td><CopyableCode code="EmailAddress" /></td>
    <td><code>string</code></td>
    <td>The email address associated with this alternate contact. (pattern: &lt;code&gt;&#91;\s&#93;*&#91;\w+=.#|!&-&#93;+@&#91;\w.-&#93;+\.&#91;\w&#93;+&#91;\s&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Name" /></td>
    <td><code>string</code></td>
    <td>The name associated with this alternate contact.</td>
</tr>
<tr>
    <td><CopyableCode code="PhoneNumber" /></td>
    <td><code>string</code></td>
    <td>The phone number associated with this alternate contact. (pattern: &lt;code&gt;&#91;\s0-9()+-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Title" /></td>
    <td><code>string</code></td>
    <td>The title associated with this alternate contact.</td>
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
    <td><a href="#get_alternate_contact"><CopyableCode code="get_alternate_contact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Update the alternate contacts for your Amazon Web Services account. Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enable trusted access for Amazon Web Services Account Management.</td>
</tr>
<tr>
    <td><a href="#put_alternate_contact"><CopyableCode code="put_alternate_contact" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-Title"><code>Title</code></a>, <a href="#parameter-EmailAddress"><code>EmailAddress</code></a>, <a href="#parameter-PhoneNumber"><code>PhoneNumber</code></a>, <a href="#parameter-AlternateContactType"><code>AlternateContactType</code></a></td>
    <td></td>
    <td>Modifies the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Update the alternate contacts for your Amazon Web Services account. Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enable trusted access for Amazon Web Services Account Management.</td>
</tr>
<tr>
    <td><a href="#delete_alternate_contact"><CopyableCode code="delete_alternate_contact" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified alternate contact from an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Update the alternate contacts for your Amazon Web Services account. Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enable trusted access for Amazon Web Services Account Management.</td>
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
    defaultValue="get_alternate_contact"
    values={[
        { label: 'get_alternate_contact', value: 'get_alternate_contact' }
    ]}
>
<TabItem value="get_alternate_contact">

Retrieves the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Update the alternate contacts for your Amazon Web Services account. Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enable trusted access for Amazon Web Services Account Management.

```sql
SELECT
AlternateContactType,
EmailAddress,
Name,
PhoneNumber,
Title
FROM aws.account.alternate_contacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_alternate_contact"
    values={[
        { label: 'put_alternate_contact', value: 'put_alternate_contact' }
    ]}
>
<TabItem value="put_alternate_contact">

Modifies the specified alternate contact attached to an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Update the alternate contacts for your Amazon Web Services account. Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enable trusted access for Amazon Web Services Account Management.

```sql
REPLACE aws.account.alternate_contacts
SET 
Name = '{{ Name }}',
Title = '{{ Title }}',
EmailAddress = '{{ EmailAddress }}',
PhoneNumber = '{{ PhoneNumber }}',
AlternateContactType = '{{ AlternateContactType }}',
AccountId = '{{ AccountId }}'
WHERE 
region = '{{ region }}' --required
AND Name = '{{ Name }}' --required
AND Title = '{{ Title }}' --required
AND EmailAddress = '{{ EmailAddress }}' --required
AND PhoneNumber = '{{ PhoneNumber }}' --required
AND AlternateContactType = '{{ AlternateContactType }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_alternate_contact"
    values={[
        { label: 'delete_alternate_contact', value: 'delete_alternate_contact' }
    ]}
>
<TabItem value="delete_alternate_contact">

Deletes the specified alternate contact from an Amazon Web Services account. For complete details about how to use the alternate contact operations, see Update the alternate contacts for your Amazon Web Services account. Before you can update the alternate contact information for an Amazon Web Services account that is managed by Organizations, you must first enable integration between Amazon Web Services Account Management and Organizations. For more information, see Enable trusted access for Amazon Web Services Account Management.

```sql
DELETE FROM aws.account.alternate_contacts
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
