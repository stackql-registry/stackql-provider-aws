--- 
title: reservations
hide_title: false
hide_table_of_contents: false
keywords:
  - reservations
  - redshift_serverless
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

Creates, updates, deletes, gets or lists a <code>reservations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reservations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.redshift_serverless.reservations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_reservation"
    values={[
        { label: 'get_reservation', value: 'get_reservation' },
        { label: 'list_reservations', value: 'list_reservations' }
    ]}
>
<TabItem value="get_reservation">

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
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer</code></td>
    <td>The number of Redshift Processing Units (RPUs) to reserve.</td>
</tr>
<tr>
    <td><CopyableCode code="endDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date for the serverless reservation. This date is one year after the start date that you specify.</td>
</tr>
<tr>
    <td><CopyableCode code="offering" /></td>
    <td><code>object</code></td>
    <td>The type of offering for the reservation. The offering class determines the payment schedule for the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the serverless reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationId" /></td>
    <td><code>string</code></td>
    <td>The identifier that uniquely identifies the serverless reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date for the serverless reservation. This is the date you created the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the reservation. Possible values include the following: payment-pending active payment-failed retired</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_reservations">

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
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer</code></td>
    <td>The number of Redshift Processing Units (RPUs) to reserve.</td>
</tr>
<tr>
    <td><CopyableCode code="endDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date for the serverless reservation. This date is one year after the start date that you specify.</td>
</tr>
<tr>
    <td><CopyableCode code="offering" /></td>
    <td><code>object</code></td>
    <td>The type of offering for the reservation. The offering class determines the payment schedule for the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) that uniquely identifies the serverless reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="reservationId" /></td>
    <td><code>string</code></td>
    <td>The identifier that uniquely identifies the serverless reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="startDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date for the serverless reservation. This is the date you created the reservation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the reservation. Possible values include the following: payment-pending active payment-failed retired</td>
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
    <td><a href="#get_reservation"><CopyableCode code="get_reservation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon Redshift Serverless reservation. A reservation gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.</td>
</tr>
<tr>
    <td><a href="#list_reservations"><CopyableCode code="list_reservations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of Reservation objects.</td>
</tr>
<tr>
    <td><a href="#create_reservation"><CopyableCode code="create_reservation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-capacity"><code>capacity</code></a>, <a href="#parameter-offeringId"><code>offeringId</code></a></td>
    <td></td>
    <td>Creates an Amazon Redshift Serverless reservation, which gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.</td>
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
    defaultValue="get_reservation"
    values={[
        { label: 'get_reservation', value: 'get_reservation' },
        { label: 'list_reservations', value: 'list_reservations' }
    ]}
>
<TabItem value="get_reservation">

Gets an Amazon Redshift Serverless reservation. A reservation gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.

```sql
SELECT
capacity,
endDate,
offering,
reservationArn,
reservationId,
startDate,
status
FROM aws.redshift_serverless.reservations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_reservations">

Returns a list of Reservation objects.

```sql
SELECT
capacity,
endDate,
offering,
reservationArn,
reservationId,
startDate,
status
FROM aws.redshift_serverless.reservations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_reservation"
    values={[
        { label: 'create_reservation', value: 'create_reservation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_reservation">

Creates an Amazon Redshift Serverless reservation, which gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.

```sql
INSERT INTO aws.redshift_serverless.reservations (
capacity,
clientToken,
offeringId,
region
)
SELECT 
{{ capacity }} /* required */,
'{{ clientToken }}',
'{{ offeringId }}' /* required */,
'{{ region }}'
RETURNING
reservation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reservations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the reservations resource.
    - name: capacity
      value: {{ capacity }}
      description: |
        The number of Redshift Processing Units (RPUs) to reserve.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. This token must be a valid UUIDv4 value. For more information about idempotency, see Making retries safe with idempotent APIs .
    - name: offeringId
      value: "{{ offeringId }}"
      description: |
        The ID of the offering associated with the reservation. The offering determines the payment schedule for the reservation.
`}</CodeBlock>

</TabItem>
</Tabs>
