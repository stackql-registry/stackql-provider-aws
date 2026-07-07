--- 
title: voice_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_profiles
  - chime_sdk_voice
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

Creates, updates, deletes, gets or lists a <code>voice_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_profiles" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_voice_profiles"
    values={[
        { label: 'list_voice_profiles', value: 'list_voice_profiles' },
        { label: 'get_voice_profile', value: 'get_voice_profile' }
    ]}
>
<TabItem value="list_voice_profiles">

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
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceProfiles" /></td>
    <td><code>array</code></td>
    <td>The list of voice profiles.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_voice_profile">

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
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the voice profile was created and enrolled.</td>
</tr>
<tr>
    <td><CopyableCode code="ExpirationTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which a voice profile expires unless you re-enroll the caller via the UpdateVoiceProfile API.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the voice profile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceProfileArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the voice profile. (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceProfileDomainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain that contains the voice profile. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VoiceProfileId" /></td>
    <td><code>string</code></td>
    <td>The ID of the voice profile. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
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
    <td><a href="#list_voice_profiles"><CopyableCode code="list_voice_profiles" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice-profile-domain-id"><code>voice-profile-domain-id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the voice profiles in a voice profile domain.</td>
</tr>
<tr>
    <td><a href="#get_voice_profile"><CopyableCode code="get_voice_profile" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_profile_id"><code>voice_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of the specified voice profile.</td>
</tr>
<tr>
    <td><a href="#create_voice_profile"><CopyableCode code="create_voice_profile" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SpeakerSearchTaskId"><code>SpeakerSearchTaskId</code></a></td>
    <td></td>
    <td>Creates a voice profile, which consists of an enrolled user and their latest voice print. Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK. For more information about voice profiles and voice analytics, see Using Amazon Chime SDK Voice Analytics in the Amazon Chime SDK Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_voice_profile"><CopyableCode code="update_voice_profile" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-voice_profile_id"><code>voice_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SpeakerSearchTaskId"><code>SpeakerSearchTaskId</code></a></td>
    <td></td>
    <td>Updates the specified voice profile’s voice print and refreshes its expiration timestamp. As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of your caller’s biometric identifiers and biometric information (“biometric data”) in the form of a digital voiceprint requires the caller’s informed consent via a written release. Such consent is required under various state laws, including biometrics laws in Illinois, Texas, Washington and other state privacy laws. You must provide a written release to each caller through a process that clearly reflects each caller’s informed consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement with AWS governing your use of the service.</td>
</tr>
<tr>
    <td><a href="#delete_voice_profile"><CopyableCode code="delete_voice_profile" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_profile_id"><code>voice_profile_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a voice profile, including its voice print and enrollment data. WARNING: This action is not reversible.</td>
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
<tr id="parameter-voice-profile-domain-id">
    <td><CopyableCode code="voice-profile-domain-id" /></td>
    <td><code>string</code></td>
    <td>The ID of the voice profile domain.</td>
</tr>
<tr id="parameter-voice_profile_id">
    <td><CopyableCode code="voice_profile_id" /></td>
    <td><code>string</code></td>
    <td>The voice profile ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results in the request.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to retrieve the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_voice_profiles"
    values={[
        { label: 'list_voice_profiles', value: 'list_voice_profiles' },
        { label: 'get_voice_profile', value: 'get_voice_profile' }
    ]}
>
<TabItem value="list_voice_profiles">

Lists the voice profiles in a voice profile domain.

```sql
SELECT
NextToken,
VoiceProfiles
FROM aws.chime_sdk_voice.voice_profiles
WHERE `voice-profile-domain-id` = '{{ voice-profile-domain-id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
<TabItem value="get_voice_profile">

Retrieves the details of the specified voice profile.

```sql
SELECT
CreatedTimestamp,
ExpirationTimestamp,
UpdatedTimestamp,
VoiceProfileArn,
VoiceProfileDomainId,
VoiceProfileId
FROM aws.chime_sdk_voice.voice_profiles
WHERE voice_profile_id = '{{ voice_profile_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_voice_profile"
    values={[
        { label: 'create_voice_profile', value: 'create_voice_profile' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_voice_profile">

Creates a voice profile, which consists of an enrolled user and their latest voice print. Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK. For more information about voice profiles and voice analytics, see Using Amazon Chime SDK Voice Analytics in the Amazon Chime SDK Developer Guide.

```sql
INSERT INTO aws.chime_sdk_voice.voice_profiles (
SpeakerSearchTaskId,
region
)
SELECT 
'{{ SpeakerSearchTaskId }}' /* required */,
'{{ region }}'
RETURNING
VoiceProfile
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: voice_profiles
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the voice_profiles resource.
    - name: SpeakerSearchTaskId
      value: "{{ SpeakerSearchTaskId }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_voice_profile"
    values={[
        { label: 'update_voice_profile', value: 'update_voice_profile' }
    ]}
>
<TabItem value="update_voice_profile">

Updates the specified voice profile’s voice print and refreshes its expiration timestamp. As a condition of using this feature, you acknowledge that the collection, use, storage, and retention of your caller’s biometric identifiers and biometric information (“biometric data”) in the form of a digital voiceprint requires the caller’s informed consent via a written release. Such consent is required under various state laws, including biometrics laws in Illinois, Texas, Washington and other state privacy laws. You must provide a written release to each caller through a process that clearly reflects each caller’s informed consent before using Amazon Chime SDK Voice Insights service, as required under the terms of your agreement with AWS governing your use of the service.

```sql
UPDATE aws.chime_sdk_voice.voice_profiles
SET 
SpeakerSearchTaskId = '{{ SpeakerSearchTaskId }}'
WHERE 
voice_profile_id = '{{ voice_profile_id }}' --required
AND region = '{{ region }}' --required
AND SpeakerSearchTaskId = '{{ SpeakerSearchTaskId }}' --required
RETURNING
VoiceProfile;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_profile"
    values={[
        { label: 'delete_voice_profile', value: 'delete_voice_profile' }
    ]}
>
<TabItem value="delete_voice_profile">

Deletes a voice profile, including its voice print and enrollment data. WARNING: This action is not reversible.

```sql
DELETE FROM aws.chime_sdk_voice.voice_profiles
WHERE voice_profile_id = '{{ voice_profile_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
