--- 
title: registration_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - registration_versions
  - pinpoint_sms_voice_v2
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

Creates, updates, deletes, gets or lists a <code>registration_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registration_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.registration_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_registration_versions"
    values={[
        { label: 'describe_registration_versions', value: 'describe_registration_versions' }
    ]}
>
<TabItem value="describe_registration_versions">

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
    <td><CopyableCode code="DeniedReasons" /></td>
    <td><code>array</code></td>
    <td>An array of RegistrationDeniedReasonInformation objects.</td>
</tr>
<tr>
    <td><CopyableCode code="Feedback" /></td>
    <td><code>string</code></td>
    <td>Generative AI feedback information provided during the registration review process. This includes comments, suggestions, or additional requirements.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationVersionStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the registration. APPROVED: Your registration has been approved. ARCHIVED: Your previously approved registration version moves into this status when a more recently submitted version is approved. DENIED: You must fix your registration and resubmit it. DISCARDED: You've abandon this version of their registration to start over with a new version. DRAFT: The initial status of a registration version after it’s created. REQUIRES_AUTHENTICATION: You need to complete email authentication. REVIEWING: Your registration has been accepted and is being reviewed. REVOKED: Your previously approved registration has been revoked. SUBMITTED: Your registration has been submitted. (DRAFT, SUBMITTED, AWS_REVIEWING, REVIEWING, REQUIRES_AUTHENTICATION, APPROVED, DISCARDED, DENIED, REVOKED, ARCHIVED, REQUIRES_OFFLINE_REVIEW)</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationVersionStatusHistory" /></td>
    <td><code>object</code></td>
    <td>The RegistrationVersionStatusHistory object contains the time stamps for when the reservations status changes.</td>
</tr>
<tr>
    <td><CopyableCode code="VersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the registration.</td>
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
    <td><a href="#describe_registration_versions"><CopyableCode code="describe_registration_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified registration version.</td>
</tr>
<tr>
    <td><a href="#create_registration_version"><CopyableCode code="create_registration_version" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistrationId"><code>RegistrationId</code></a></td>
    <td></td>
    <td>Create a new version of the registration and increase the VersionNumber. The previous version of the registration becomes read-only.</td>
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
    defaultValue="describe_registration_versions"
    values={[
        { label: 'describe_registration_versions', value: 'describe_registration_versions' }
    ]}
>
<TabItem value="describe_registration_versions">

Retrieves the specified registration version.

```sql
SELECT
DeniedReasons,
Feedback,
RegistrationVersionStatus,
RegistrationVersionStatusHistory,
VersionNumber
FROM aws.pinpoint_sms_voice_v2.registration_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registration_version"
    values={[
        { label: 'create_registration_version', value: 'create_registration_version' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registration_version">

Create a new version of the registration and increase the VersionNumber. The previous version of the registration becomes read-only.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.registration_versions (
RegistrationId,
region
)
SELECT 
'{{ RegistrationId }}' /* required */,
'{{ region }}'
RETURNING
RegistrationArn,
RegistrationId,
RegistrationVersionStatus,
RegistrationVersionStatusHistory,
VersionNumber
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registration_versions
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registration_versions resource.
    - name: RegistrationId
      value: "{{ RegistrationId }}"
      description: |
        The unique identifier for the registration.
`}</CodeBlock>

</TabItem>
</Tabs>
