--- 
title: suppressed_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - suppressed_destinations
  - sesv2
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

Creates, updates, deletes, gets or lists a <code>suppressed_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suppressed_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sesv2.suppressed_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_suppressed_destination"
    values={[
        { label: 'get_suppressed_destination', value: 'get_suppressed_destination' },
        { label: 'list_suppressed_destinations', value: 'list_suppressed_destinations' }
    ]}
>
<TabItem value="get_suppressed_destination">

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
    <td><CopyableCode code="attributes" /></td>
    <td><code>object</code></td>
    <td>An optional value that can contain additional information about the reasons that the address was added to the suppression list for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="email_address" /></td>
    <td><code>string</code></td>
    <td>The email address that is on the suppression list for your account.</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the suppressed destination was last updated, shown in Unix time format.</td>
</tr>
<tr>
    <td><CopyableCode code="reason" /></td>
    <td><code>string</code></td>
    <td>The reason that the address was added to the suppression list for your account. The value can be one of the following: COMPLAINT – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a complaint. BOUNCE – Amazon SES added an email address to the suppression list for your account because a message sent to that address results in a hard bounce. (BOUNCE, COMPLAINT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_suppressed_destinations">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates that there are additional email addresses on the suppression list for your account. To view additional suppressed addresses, issue another request to ListSuppressedDestinations, and pass this token in the NextToken parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="suppressed_destination_summaries" /></td>
    <td><code>array</code></td>
    <td>A list of summaries, each containing a summary for a suppressed email destination.</td>
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
    <td><a href="#get_suppressed_destination"><CopyableCode code="get_suppressed_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-email_address"><code>email_address</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about a specific email address that's on the suppression list for your account.</td>
</tr>
<tr>
    <td><a href="#list_suppressed_destinations"><CopyableCode code="list_suppressed_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Reason"><code>Reason</code></a>, <a href="#parameter-StartDate"><code>StartDate</code></a>, <a href="#parameter-EndDate"><code>EndDate</code></a>, <a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-PageSize"><code>PageSize</code></a></td>
    <td>Retrieves a list of email addresses that are on the suppression list for your account.</td>
</tr>
<tr>
    <td><a href="#put_suppressed_destination"><CopyableCode code="put_suppressed_destination" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-EmailAddress"><code>EmailAddress</code></a>, <a href="#parameter-Reason"><code>Reason</code></a></td>
    <td></td>
    <td>Adds an email address to the suppression list for your account.</td>
</tr>
<tr>
    <td><a href="#delete_suppressed_destination"><CopyableCode code="delete_suppressed_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-email_address"><code>email_address</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes an email address from the suppression list for your account.</td>
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
<tr id="parameter-email_address">
    <td><CopyableCode code="email_address" /></td>
    <td><code>string</code></td>
    <td>The suppressed email destination to remove from the account suppression list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EndDate">
    <td><CopyableCode code="EndDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list before a specific date.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token returned from a previous call to ListSuppressedDestinations to indicate the position in the list of suppressed email addresses.</td>
</tr>
<tr id="parameter-PageSize">
    <td><CopyableCode code="PageSize" /></td>
    <td><code>integer</code></td>
    <td>The number of results to show in a single call to ListSuppressedDestinations. If the number of results is larger than the number you specified in this parameter, then the response includes a NextToken element, which you can use to obtain additional results.</td>
</tr>
<tr id="parameter-Reason">
    <td><CopyableCode code="Reason" /></td>
    <td><code>array</code></td>
    <td>The factors that caused the email address to be added to .</td>
</tr>
<tr id="parameter-StartDate">
    <td><CopyableCode code="StartDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Used to filter the list of suppressed email destinations so that it only includes addresses that were added to the list after a specific date.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_suppressed_destination"
    values={[
        { label: 'get_suppressed_destination', value: 'get_suppressed_destination' },
        { label: 'list_suppressed_destinations', value: 'list_suppressed_destinations' }
    ]}
>
<TabItem value="get_suppressed_destination">

Retrieves information about a specific email address that's on the suppression list for your account.

```sql
SELECT
attributes,
email_address,
last_update_time,
reason
FROM aws.sesv2.suppressed_destinations
WHERE email_address = '{{ email_address }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_suppressed_destinations">

Retrieves a list of email addresses that are on the suppression list for your account.

```sql
SELECT
next_token,
suppressed_destination_summaries
FROM aws.sesv2.suppressed_destinations
WHERE region = '{{ region }}' -- required
AND Reason = '{{ Reason }}'
AND StartDate = '{{ StartDate }}'
AND EndDate = '{{ EndDate }}'
AND NextToken = '{{ NextToken }}'
AND PageSize = '{{ PageSize }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_suppressed_destination"
    values={[
        { label: 'put_suppressed_destination', value: 'put_suppressed_destination' }
    ]}
>
<TabItem value="put_suppressed_destination">

Adds an email address to the suppression list for your account.

```sql
REPLACE aws.sesv2.suppressed_destinations
SET 
EmailAddress = '{{ EmailAddress }}',
Reason = '{{ Reason }}'
WHERE 
region = '{{ region }}' --required
AND EmailAddress = '{{ EmailAddress }}' --required
AND Reason = '{{ Reason }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_suppressed_destination"
    values={[
        { label: 'delete_suppressed_destination', value: 'delete_suppressed_destination' }
    ]}
>
<TabItem value="delete_suppressed_destination">

Removes an email address from the suppression list for your account.

```sql
DELETE FROM aws.sesv2.suppressed_destinations
WHERE email_address = '{{ email_address }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
