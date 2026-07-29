--- 
title: application_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - application_settings
  - pinpoint
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

Creates, updates, deletes, gets or lists an <code>application_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="application_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint.application_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_application_settings"
    values={[
        { label: 'get_application_settings', value: 'get_application_settings' }
    ]}
>
<TabItem value="get_application_settings">

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr>
    <td><CopyableCode code="campaign_hook" /></td>
    <td><code>object</code></td>
    <td>The settings for the AWS Lambda function to invoke by default as a code hook for campaigns in the application. You can use this hook to customize segments that are used by campaigns in the application.</td>
</tr>
<tr>
    <td><CopyableCode code="journey_limits" /></td>
    <td><code>object</code></td>
    <td>The default sending limits for journeys in the application. These limits apply to each journey for the application but can be overridden, on a per journey basis, with the JourneyLimits resource.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string</code></td>
    <td>The date and time, in ISO 8601 format, when the application's settings were last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="limits" /></td>
    <td><code>object</code></td>
    <td>The default sending limits for campaigns in the application.</td>
</tr>
<tr>
    <td><CopyableCode code="quiet_time" /></td>
    <td><code>object</code></td>
    <td>The default quiet time for campaigns in the application. Quiet time is a specific time range when messages aren't sent to endpoints, if all the following conditions are met: The EndpointDemographic.Timezone property of the endpoint is set to a valid value. The current time in the endpoint's time zone is later than or equal to the time specified by the QuietTime.Start property for the application (or a campaign or journey that has custom quiet time settings). The current time in the endpoint's time zone is earlier than or equal to the time specified by the QuietTime.End property for the application (or a campaign or journey that has custom quiet time settings). If any of the preceding conditions isn't met, the endpoint will receive messages from a campaign or journey, even if quiet time is enabled.</td>
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
    <td><a href="#get_application_settings"><CopyableCode code="get_application_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves information about the settings for an application.</td>
</tr>
<tr>
    <td><a href="#update_application_settings"><CopyableCode code="update_application_settings" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-application-id"><code>application-id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-WriteApplicationSettingsRequest"><code>WriteApplicationSettingsRequest</code></a></td>
    <td></td>
    <td>Updates the settings for an application.</td>
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
<tr id="parameter-application-id">
    <td><CopyableCode code="application-id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the application. This identifier is displayed as the Project ID on the Amazon Pinpoint console.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_application_settings"
    values={[
        { label: 'get_application_settings', value: 'get_application_settings' }
    ]}
>
<TabItem value="get_application_settings">

Retrieves information about the settings for an application.

```sql
SELECT
application_id,
campaign_hook,
journey_limits,
last_modified_date,
limits,
quiet_time
FROM aws.pinpoint.application_settings
WHERE `application-id` = '{{ application-id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_application_settings"
    values={[
        { label: 'update_application_settings', value: 'update_application_settings' }
    ]}
>
<TabItem value="update_application_settings">

Updates the settings for an application.

```sql
UPDATE aws.pinpoint.application_settings
SET 
WriteApplicationSettingsRequest = '{{ WriteApplicationSettingsRequest }}'
WHERE 
`application-id` = '{{ application-id }}' --required
AND region = '{{ region }}' --required
AND WriteApplicationSettingsRequest = '{{ WriteApplicationSettingsRequest }}' --required
RETURNING
application_settings_resource;
```
</TabItem>
</Tabs>
