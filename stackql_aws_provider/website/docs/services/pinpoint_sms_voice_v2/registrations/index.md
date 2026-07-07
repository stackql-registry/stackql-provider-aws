--- 
title: registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - registrations
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

Creates, updates, deletes, gets or lists a <code>registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.pinpoint_sms_voice_v2.registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_registrations"
    values={[
        { label: 'describe_registrations', value: 'describe_registrations' }
    ]}
>
<TabItem value="describe_registrations">

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
    <td><CopyableCode code="AdditionalAttributes" /></td>
    <td><code>object</code></td>
    <td>Metadata about a given registration which is specific to that registration type.</td>
</tr>
<tr>
    <td><CopyableCode code="ApprovedVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The version number of the registration that was approved.</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the registration was created, in UNIX epoch time format.</td>
</tr>
<tr>
    <td><CopyableCode code="CurrentVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The current version number of the registration.</td>
</tr>
<tr>
    <td><CopyableCode code="LatestDeniedVersionNumber" /></td>
    <td><code>integer (int64)</code></td>
    <td>The latest version number of the registration that was denied.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the registration.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the registration.</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the registration. CLOSED: The phone number or sender ID has been deleted and you must also delete the registration for the number. CREATED: Your registration is created but not submitted. COMPLETE: Your registration has been approved and your origination identity has been created. DELETED: The registration has been deleted. PROVISIONING: Your registration has been approved and your origination identity is being created. REQUIRES_AUTHENTICATION: You need to complete email authentication. REQUIRES_UPDATES: You must fix your registration and resubmit it. REVIEWING: Your registration has been accepted and is being reviewed. SUBMITTED: Your registration has been submitted and is awaiting review. (CREATED, SUBMITTED, AWS_REVIEWING, REVIEWING, REQUIRES_AUTHENTICATION, PROVISIONING, COMPLETE, REQUIRES_UPDATES, CLOSED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="RegistrationType" /></td>
    <td><code>string</code></td>
    <td>The type of registration form. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action. (pattern: &lt;code&gt;&#91;A-Za-z0-9_&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_registrations"><CopyableCode code="describe_registrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified registrations.</td>
</tr>
<tr>
    <td><a href="#create_registration"><CopyableCode code="create_registration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistrationType"><code>RegistrationType</code></a></td>
    <td></td>
    <td>Creates a new registration based on the RegistrationType field.</td>
</tr>
<tr>
    <td><a href="#delete_registration"><CopyableCode code="delete_registration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently delete an existing registration from your account.</td>
</tr>
<tr>
    <td><a href="#discard_registration_version"><CopyableCode code="discard_registration_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistrationId"><code>RegistrationId</code></a></td>
    <td></td>
    <td>Discard the current version of the registration.</td>
</tr>
<tr>
    <td><a href="#submit_registration_version"><CopyableCode code="submit_registration_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RegistrationId"><code>RegistrationId</code></a></td>
    <td></td>
    <td>Submit the specified registration for review and approval.</td>
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
    defaultValue="describe_registrations"
    values={[
        { label: 'describe_registrations', value: 'describe_registrations' }
    ]}
>
<TabItem value="describe_registrations">

Retrieves the specified registrations.

```sql
SELECT
AdditionalAttributes,
ApprovedVersionNumber,
CreatedTimestamp,
CurrentVersionNumber,
LatestDeniedVersionNumber,
RegistrationArn,
RegistrationId,
RegistrationStatus,
RegistrationType
FROM aws.pinpoint_sms_voice_v2.registrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_registration"
    values={[
        { label: 'create_registration', value: 'create_registration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_registration">

Creates a new registration based on the RegistrationType field.

```sql
INSERT INTO aws.pinpoint_sms_voice_v2.registrations (
RegistrationType,
Tags,
ClientToken,
region
)
SELECT 
'{{ RegistrationType }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
AdditionalAttributes,
CreatedTimestamp,
CurrentVersionNumber,
RegistrationArn,
RegistrationId,
RegistrationStatus,
RegistrationType,
Tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: registrations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the registrations resource.
    - name: RegistrationType
      value: "{{ RegistrationType }}"
      description: |
        The type of registration form to create. The list of RegistrationTypes can be found using the DescribeRegistrationTypeDefinitions action.
    - name: Tags
      description: |
        An array of tags (key and value pairs) to associate with the registration.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you don't specify a client token, a randomly generated token is used for the request to ensure idempotency.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_registration"
    values={[
        { label: 'delete_registration', value: 'delete_registration' }
    ]}
>
<TabItem value="delete_registration">

Permanently delete an existing registration from your account.

```sql
DELETE FROM aws.pinpoint_sms_voice_v2.registrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="discard_registration_version"
    values={[
        { label: 'discard_registration_version', value: 'discard_registration_version' },
        { label: 'submit_registration_version', value: 'submit_registration_version' }
    ]}
>
<TabItem value="discard_registration_version">

Discard the current version of the registration.

```sql
EXEC aws.pinpoint_sms_voice_v2.registrations.discard_registration_version 
@region='{{ region }}' --required 
@@json=
'{
"RegistrationId": "{{ RegistrationId }}"
}'
;
```
</TabItem>
<TabItem value="submit_registration_version">

Submit the specified registration for review and approval.

```sql
EXEC aws.pinpoint_sms_voice_v2.registrations.submit_registration_version 
@region='{{ region }}' --required 
@@json=
'{
"RegistrationId": "{{ RegistrationId }}", 
"AwsReview": {{ AwsReview }}
}'
;
```
</TabItem>
</Tabs>
