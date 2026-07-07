--- 
title: supplemental_tax_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - supplemental_tax_registrations
  - taxsettings
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

Creates, updates, deletes, gets or lists a <code>supplemental_tax_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="supplemental_tax_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.taxsettings.supplemental_tax_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_supplemental_tax_registrations"
    values={[
        { label: 'list_supplemental_tax_registrations', value: 'list_supplemental_tax_registrations' }
    ]}
>
<TabItem value="list_supplemental_tax_registrations">

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
    <td><CopyableCode code="address" /></td>
    <td><code>object</code></td>
    <td>The details of the address associated with the TRN information.</td>
</tr>
<tr>
    <td><CopyableCode code="authorityId" /></td>
    <td><code>string</code></td>
    <td>Unique authority ID for the supplemental TRN. (pattern: &lt;code&gt;^&#91;\s\S&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="legalName" /></td>
    <td><code>string</code></td>
    <td>The legal name associated with your TRN registration. (pattern: &lt;code&gt;^(?!\s*$)&#91;\s\S&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registrationId" /></td>
    <td><code>string</code></td>
    <td>The supplemental TRN unique identifier. (pattern: &lt;code&gt;^(?!\s*$)&#91;\s\S&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registrationType" /></td>
    <td><code>string</code></td>
    <td>Type of supplemental TRN. Currently, this can only be VAT. (VAT)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of your TRN. (Verified, Pending, Deleted, Rejected)</td>
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
    <td><a href="#list_supplemental_tax_registrations"><CopyableCode code="list_supplemental_tax_registrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves supplemental tax registrations for a single account.</td>
</tr>
<tr>
    <td><a href="#put_supplemental_tax_registration"><CopyableCode code="put_supplemental_tax_registration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taxRegistrationEntry"><code>taxRegistrationEntry</code></a></td>
    <td></td>
    <td>Stores supplemental tax registration for a single account.</td>
</tr>
<tr>
    <td><a href="#delete_supplemental_tax_registration"><CopyableCode code="delete_supplemental_tax_registration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a supplemental tax registration for a single account.</td>
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
    defaultValue="list_supplemental_tax_registrations"
    values={[
        { label: 'list_supplemental_tax_registrations', value: 'list_supplemental_tax_registrations' }
    ]}
>
<TabItem value="list_supplemental_tax_registrations">

Retrieves supplemental tax registrations for a single account.

```sql
SELECT
address,
authorityId,
legalName,
registrationId,
registrationType,
status
FROM aws.taxsettings.supplemental_tax_registrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_supplemental_tax_registration"
    values={[
        { label: 'put_supplemental_tax_registration', value: 'put_supplemental_tax_registration' }
    ]}
>
<TabItem value="put_supplemental_tax_registration">

Stores supplemental tax registration for a single account.

```sql
REPLACE aws.taxsettings.supplemental_tax_registrations
SET 
taxRegistrationEntry = '{{ taxRegistrationEntry }}'
WHERE 
region = '{{ region }}' --required
AND taxRegistrationEntry = '{{ taxRegistrationEntry }}' --required
RETURNING
authorityId,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_supplemental_tax_registration"
    values={[
        { label: 'delete_supplemental_tax_registration', value: 'delete_supplemental_tax_registration' }
    ]}
>
<TabItem value="delete_supplemental_tax_registration">

Deletes a supplemental tax registration for a single account.

```sql
DELETE FROM aws.taxsettings.supplemental_tax_registrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
