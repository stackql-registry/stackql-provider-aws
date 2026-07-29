--- 
title: contact_informations
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_informations
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

Creates, updates, deletes, gets or lists a <code>contact_informations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_informations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.account.contact_informations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_contact_information"
    values={[
        { label: 'get_contact_information', value: 'get_contact_information' }
    ]}
>
<TabItem value="get_contact_information">

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
    <td><CopyableCode code="address_line_1" /></td>
    <td><code>string</code></td>
    <td>The first line of the primary contact address.</td>
</tr>
<tr>
    <td><CopyableCode code="address_line_2" /></td>
    <td><code>string</code></td>
    <td>The second line of the primary contact address, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="address_line_3" /></td>
    <td><code>string</code></td>
    <td>The third line of the primary contact address, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>The city of the primary contact address.</td>
</tr>
<tr>
    <td><CopyableCode code="company_name" /></td>
    <td><code>string</code></td>
    <td>The name of the company associated with the primary contact information, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The ISO-3166 two-letter country code for the primary contact address.</td>
</tr>
<tr>
    <td><CopyableCode code="district_or_county" /></td>
    <td><code>string</code></td>
    <td>The district or county of the primary contact address, if any.</td>
</tr>
<tr>
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>The full name of the primary contact address.</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>The phone number of the primary contact information. The number will be validated and, in some countries, checked for activation. (pattern: &lt;code&gt;&#91;+&#93;&#91;\s0-9()-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="postal_code" /></td>
    <td><code>string</code></td>
    <td>The postal code of the primary contact address.</td>
</tr>
<tr>
    <td><CopyableCode code="state_or_region" /></td>
    <td><code>string</code></td>
    <td>The state or region of the primary contact address. If the mailing address is within the United States (US), the value in this field can be either a two character state code (for example, NJ) or the full state name (for example, New Jersey). This field is required in the following countries: US, CA, GB, DE, JP, IN, and BR.</td>
</tr>
<tr>
    <td><CopyableCode code="website_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the website associated with the primary contact information, if any.</td>
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
    <td><a href="#get_contact_information"><CopyableCode code="get_contact_information" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary contact for your Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#put_contact_information"><CopyableCode code="put_contact_information" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContactInformation"><code>ContactInformation</code></a></td>
    <td></td>
    <td>Updates the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary contact for your Amazon Web Services account.</td>
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
    defaultValue="get_contact_information"
    values={[
        { label: 'get_contact_information', value: 'get_contact_information' }
    ]}
>
<TabItem value="get_contact_information">

Retrieves the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary contact for your Amazon Web Services account.

```sql
SELECT
address_line_1,
address_line_2,
address_line_3,
city,
company_name,
country_code,
district_or_county,
full_name,
phone_number,
postal_code,
state_or_region,
website_url
FROM aws.account.contact_informations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_contact_information"
    values={[
        { label: 'put_contact_information', value: 'put_contact_information' }
    ]}
>
<TabItem value="put_contact_information">

Updates the primary contact information of an Amazon Web Services account. For complete details about how to use the primary contact operations, see Update the primary contact for your Amazon Web Services account.

```sql
REPLACE aws.account.contact_informations
SET 
ContactInformation = '{{ ContactInformation }}',
AccountId = '{{ AccountId }}'
WHERE 
region = '{{ region }}' --required
AND ContactInformation = '{{ ContactInformation }}' --required;
```
</TabItem>
</Tabs>
