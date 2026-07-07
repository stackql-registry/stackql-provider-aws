--- 
title: contact_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - contact_versions
  - groundstation
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

Creates, updates, deletes, gets or lists a <code>contact_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="contact_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.groundstation.contact_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_contact_version"
    values={[
        { label: 'describe_contact_version', value: 'describe_contact_version' },
        { label: 'list_contact_versions', value: 'list_contact_versions' }
    ]}
>
<TabItem value="describe_contact_version">

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
    <td><CopyableCode code="contactId" /></td>
    <td><code>string</code></td>
    <td>UUID of a contact. (pattern: &lt;code&gt;&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="contactStatus" /></td>
    <td><code>string</code></td>
    <td>Status of a contact. (SCHEDULING, FAILED_TO_SCHEDULE, SCHEDULED, CANCELLED, AWS_CANCELLED, PREPASS, PASS, POSTPASS, COMPLETED, FAILED, AVAILABLE, CANCELLING, AWS_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="dataflowList" /></td>
    <td><code>array</code></td>
    <td>List describing source and destination details for each dataflow edge.</td>
</tr>
<tr>
    <td><CopyableCode code="endTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time of a contact in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="ephemeris" /></td>
    <td><code>object</code></td>
    <td>The ephemeris that determines antenna pointing directions for the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="errorMessage" /></td>
    <td><code>string</code></td>
    <td>Error message for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="groundStation" /></td>
    <td><code>string</code></td>
    <td>Ground station for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="maximumElevation" /></td>
    <td><code>object</code></td>
    <td>Maximum elevation angle of a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="missionProfileArn" /></td>
    <td><code>string</code></td>
    <td>ARN of the contact's mission profile. (pattern: &lt;code&gt;arn:aws:groundstation:&#91;-a-z0-9&#93;&#123;1,50&#125;:&#91;0-9&#93;&#123;12&#125;:mission-profile/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="postPassEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>End time in UTC of the post-pass period, at which you receive a CloudWatch event indicating the pass has finished.</td>
</tr>
<tr>
    <td><CopyableCode code="prePassStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time in UTC of the pre-pass period, at which you receive a CloudWatch event indicating an upcoming pass.</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region where the ReserveContact API was called to schedule this contact.</td>
</tr>
<tr>
    <td><CopyableCode code="satelliteArn" /></td>
    <td><code>string</code></td>
    <td>ARN of a satellite. (pattern: &lt;code&gt;arn:aws:groundstation:(&#91;-a-z0-9&#93;&#123;1,50&#125;)?:&#91;0-9&#93;&#123;12&#125;:satellite/&#91;a-f0-9&#93;&#123;8&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;4&#125;-&#91;a-f0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="startTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start time of a contact in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags assigned to a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="trackingOverrides" /></td>
    <td><code>object</code></td>
    <td>Tracking configuration overrides applied to this contact version. For the initial version, these are the overrides specified when the contact was reserved. For subsequent versions, these are the overrides associated with that specific version update.</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Version information for a contact.</td>
</tr>
<tr>
    <td><CopyableCode code="visibilityEndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Projected time in UTC your satellite will set below the receive mask. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.</td>
</tr>
<tr>
    <td><CopyableCode code="visibilityStartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Projected time in UTC your satellite will rise above the receive mask. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_contact_versions">

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
    <td><CopyableCode code="activated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the contact version was activated in UTC. A version is activated when it becomes the current active version of the contact.</td>
</tr>
<tr>
    <td><CopyableCode code="created" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the contact version was created in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="failureCodes" /></td>
    <td><code>array</code></td>
    <td>List of failure codes for the contact version.</td>
</tr>
<tr>
    <td><CopyableCode code="failureMessage" /></td>
    <td><code>string</code></td>
    <td>Failure message for the contact version.</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdated" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the contact version was last updated in UTC.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the contact version. (UPDATING, ACTIVE, SUPERSEDED, FAILED_TO_UPDATE)</td>
</tr>
<tr>
    <td><CopyableCode code="superseded" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time the contact version was superseded in UTC. A version is superseded when a newer version becomes active.</td>
</tr>
<tr>
    <td><CopyableCode code="versionId" /></td>
    <td><code>integer</code></td>
    <td>Version ID of a contact.</td>
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
    <td><a href="#describe_contact_version"><CopyableCode code="describe_contact_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-version_id"><code>version_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a specific version of a contact.</td>
</tr>
<tr>
    <td><a href="#list_contact_versions"><CopyableCode code="list_contact_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-contact_id"><code>contact_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of versions for a specified contact.</td>
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
<tr id="parameter-contact_id">
    <td><CopyableCode code="contact_id" /></td>
    <td><code>string</code></td>
    <td>UUID of a contact.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-version_id">
    <td><CopyableCode code="version_id" /></td>
    <td><code>integer</code></td>
    <td>Version ID of a contact.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of contact versions returned.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>Next token returned in the request of a previous ListContactVersions call. Used to get the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_contact_version"
    values={[
        { label: 'describe_contact_version', value: 'describe_contact_version' },
        { label: 'list_contact_versions', value: 'list_contact_versions' }
    ]}
>
<TabItem value="describe_contact_version">

Describes a specific version of a contact.

```sql
SELECT
contactId,
contactStatus,
dataflowList,
endTime,
ephemeris,
errorMessage,
groundStation,
maximumElevation,
missionProfileArn,
postPassEndTime,
prePassStartTime,
region,
satelliteArn,
startTime,
tags,
trackingOverrides,
version,
visibilityEndTime,
visibilityStartTime
FROM aws.groundstation.contact_versions
WHERE contact_id = '{{ contact_id }}' -- required
AND version_id = '{{ version_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_contact_versions">

Returns a list of versions for a specified contact.

```sql
SELECT
activated,
created,
failureCodes,
failureMessage,
lastUpdated,
status,
superseded,
versionId
FROM aws.groundstation.contact_versions
WHERE contact_id = '{{ contact_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>
