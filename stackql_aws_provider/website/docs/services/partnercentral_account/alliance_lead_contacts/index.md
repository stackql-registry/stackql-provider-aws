--- 
title: alliance_lead_contacts
hide_title: false
hide_table_of_contents: false
keywords:
  - alliance_lead_contacts
  - partnercentral_account
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

Creates, updates, deletes, gets or lists an <code>alliance_lead_contacts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="alliance_lead_contacts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.partnercentral_account.alliance_lead_contacts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_alliance_lead_contact"
    values={[
        { label: 'get_alliance_lead_contact', value: 'get_alliance_lead_contact' }
    ]}
>
<TabItem value="get_alliance_lead_contact">

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
    <td><CopyableCode code="AllianceLeadContact" /></td>
    <td><code>object</code></td>
    <td>The alliance lead contact information including name, email, and business title.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the partner account. (pattern: &lt;code&gt;arn:&#91;a-z-&#93;+:partnercentral:&#91;a-z0-9-&#93;+:&#91;0-9&#93;&#123;12&#125;:catalog/&#91;A-Za-z-_&#93;+/partner/partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Catalog" /></td>
    <td><code>string</code></td>
    <td>The catalog identifier for the partner account. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the partner account. (pattern: &lt;code&gt;partner-&#91;A-Za-z0-9&#93;&#123;13&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_alliance_lead_contact"><CopyableCode code="get_alliance_lead_contact" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the alliance lead contact information for a partner account.</td>
</tr>
<tr>
    <td><a href="#put_alliance_lead_contact"><CopyableCode code="put_alliance_lead_contact" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Identifier"><code>Identifier</code></a>, <a href="#parameter-AllianceLeadContact"><code>AllianceLeadContact</code></a></td>
    <td></td>
    <td>Creates or updates the alliance lead contact information for a partner account.</td>
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
    defaultValue="get_alliance_lead_contact"
    values={[
        { label: 'get_alliance_lead_contact', value: 'get_alliance_lead_contact' }
    ]}
>
<TabItem value="get_alliance_lead_contact">

Retrieves the alliance lead contact information for a partner account.

```sql
SELECT
AllianceLeadContact,
Arn,
Catalog,
Id
FROM aws.partnercentral_account.alliance_lead_contacts
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_alliance_lead_contact"
    values={[
        { label: 'put_alliance_lead_contact', value: 'put_alliance_lead_contact' }
    ]}
>
<TabItem value="put_alliance_lead_contact">

Creates or updates the alliance lead contact information for a partner account.

```sql
REPLACE aws.partnercentral_account.alliance_lead_contacts
SET 
Catalog = '{{ Catalog }}',
Identifier = '{{ Identifier }}',
AllianceLeadContact = '{{ AllianceLeadContact }}',
EmailVerificationCode = '{{ EmailVerificationCode }}'
WHERE 
region = '{{ region }}' --required
AND Identifier = '{{ Identifier }}' --required
AND AllianceLeadContact = '{{ AllianceLeadContact }}' --required
RETURNING
AllianceLeadContact,
Arn,
Catalog,
Id;
```
</TabItem>
</Tabs>
