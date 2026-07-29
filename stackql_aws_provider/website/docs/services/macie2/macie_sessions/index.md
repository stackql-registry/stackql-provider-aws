--- 
title: macie_sessions
hide_title: false
hide_table_of_contents: false
keywords:
  - macie_sessions
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

Creates, updates, deletes, gets or lists a <code>macie_sessions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="macie_sessions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.macie_sessions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_macie_session"
    values={[
        { label: 'get_macie_session', value: 'get_macie_session' }
    ]}
>
<TabItem value="get_macie_session">

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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie account was created.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_publishing_frequency" /></td>
    <td><code>string</code></td>
    <td>The frequency with which Amazon Macie publishes updates to policy findings for an account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events). For more information, see Monitoring and processing findings in the Amazon Macie User Guide. Valid values are: (FIFTEEN_MINUTES, ONE_HOUR, SIX_HOURS)</td>
</tr>
<tr>
    <td><CopyableCode code="service_role" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service-linked role that allows Amazon Macie to monitor and analyze data in Amazon Web Services resources for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of an Amazon Macie account. Valid values are: (PAUSED, ENABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, of the most recent change to the status or configuration settings for the Amazon Macie account.</td>
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
    <td><a href="#get_macie_session"><CopyableCode code="get_macie_session" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the status and configuration settings for an Amazon Macie account.</td>
</tr>
<tr>
    <td><a href="#update_macie_session"><CopyableCode code="update_macie_session" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.</td>
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
    defaultValue="get_macie_session"
    values={[
        { label: 'get_macie_session', value: 'get_macie_session' }
    ]}
>
<TabItem value="get_macie_session">

Retrieves the status and configuration settings for an Amazon Macie account.

```sql
SELECT
created_at,
finding_publishing_frequency,
service_role,
status,
updated_at
FROM aws.macie2.macie_sessions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_macie_session"
    values={[
        { label: 'update_macie_session', value: 'update_macie_session' }
    ]}
>
<TabItem value="update_macie_session">

Suspends or re-enables Amazon Macie, or updates the configuration settings for a Macie account.

```sql
UPDATE aws.macie2.macie_sessions
SET 
findingPublishingFrequency = '{{ findingPublishingFrequency }}',
status = '{{ status }}'
WHERE 
region = '{{ region }}' --required;
```
</TabItem>
</Tabs>
