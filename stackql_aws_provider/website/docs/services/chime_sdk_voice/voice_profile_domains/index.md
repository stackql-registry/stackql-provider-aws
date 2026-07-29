--- 
title: voice_profile_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - voice_profile_domains
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

Creates, updates, deletes, gets or lists a <code>voice_profile_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voice_profile_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.chime_sdk_voice.voice_profile_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_voice_profile_domain"
    values={[
        { label: 'get_voice_profile_domain', value: 'get_voice_profile_domain' },
        { label: 'list_voice_profile_domains', value: 'list_voice_profile_domains' }
    ]}
>
<TabItem value="get_voice_profile_domain">

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
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the voice profile domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the voice profile domain.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the voice profile domain. (pattern: &lt;code&gt;&#91;a-zA-Z0-9 _.-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>A structure that contains the configuration settings for server-side encryption. We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the voice profile was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="voice_profile_domain_arn" /></td>
    <td><code>string</code></td>
    <td>The voice profile domain's Amazon Resource Number (ARN). (pattern: &lt;code&gt;^arn&#91;\/\:\-\_\.a-zA-Z0-9&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="voice_profile_domain_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the voice profile domain. (pattern: &lt;code&gt;.*\S.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_voice_profile_domains">

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
    <td>The token used to return the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="voice_profile_domains" /></td>
    <td><code>array</code></td>
    <td>The list of voice profile domains.</td>
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
    <td><a href="#get_voice_profile_domain"><CopyableCode code="get_voice_profile_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-voice_profile_domain_id"><code>voice_profile_domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of the specified voice profile domain.</td>
</tr>
<tr>
    <td><a href="#list_voice_profile_domains"><CopyableCode code="list_voice_profile_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the specified voice profile domains in the administrator's AWS account.</td>
</tr>
<tr>
    <td><a href="#create_voice_profile_domain"><CopyableCode code="create_voice_profile_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-Name"><code>Name</code></a>, <a href="#parameter-ServerSideEncryptionConfiguration"><code>ServerSideEncryptionConfiguration</code></a></td>
    <td></td>
    <td>Creates a voice profile domain, a collection of voice profiles, their voice prints, and encrypted enrollment audio. Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK. For more information about voice profile domains, see Using Amazon Chime SDK Voice Analytics in the Amazon Chime SDK Developer Guide.</td>
</tr>
<tr>
    <td><a href="#update_voice_profile_domain"><CopyableCode code="update_voice_profile_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-voice_profile_domain_id"><code>voice_profile_domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the settings for the specified voice profile domain.</td>
</tr>
<tr>
    <td><a href="#delete_voice_profile_domain"><CopyableCode code="delete_voice_profile_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-voice_profile_domain_id"><code>voice_profile_domain_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes all voice profiles in the domain. WARNING: This action is not reversible.</td>
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
<tr id="parameter-voice_profile_domain_id">
    <td><CopyableCode code="voice_profile_domain_id" /></td>
    <td><code>string</code></td>
    <td>The voice profile domain ID.</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in a single call.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>The token used to return the next page of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_voice_profile_domain"
    values={[
        { label: 'get_voice_profile_domain', value: 'get_voice_profile_domain' },
        { label: 'list_voice_profile_domains', value: 'list_voice_profile_domains' }
    ]}
>
<TabItem value="get_voice_profile_domain">

Retrieves the details of the specified voice profile domain.

```sql
SELECT
created_timestamp,
description,
name,
server_side_encryption_configuration,
updated_timestamp,
voice_profile_domain_arn,
voice_profile_domain_id
FROM aws.chime_sdk_voice.voice_profile_domains
WHERE voice_profile_domain_id = '{{ voice_profile_domain_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_voice_profile_domains">

Lists the specified voice profile domains in the administrator's AWS account.

```sql
SELECT
next_token,
voice_profile_domains
FROM aws.chime_sdk_voice.voice_profile_domains
WHERE region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_voice_profile_domain"
    values={[
        { label: 'create_voice_profile_domain', value: 'create_voice_profile_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_voice_profile_domain">

Creates a voice profile domain, a collection of voice profiles, their voice prints, and encrypted enrollment audio. Before creating any voice profiles, you must provide all notices and obtain all consents from the speaker as required under applicable privacy and biometrics laws, and as required under the AWS service terms for the Amazon Chime SDK. For more information about voice profile domains, see Using Amazon Chime SDK Voice Analytics in the Amazon Chime SDK Developer Guide.

```sql
INSERT INTO aws.chime_sdk_voice.voice_profile_domains (
Name,
Description,
ServerSideEncryptionConfiguration,
ClientRequestToken,
Tags,
region
)
SELECT 
'{{ Name }}' /* required */,
'{{ Description }}',
'{{ ServerSideEncryptionConfiguration }}' /* required */,
'{{ ClientRequestToken }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
voice_profile_domain
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: voice_profile_domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the voice_profile_domains resource.
    - name: Name
      value: "{{ Name }}"
    - name: Description
      value: "{{ Description }}"
    - name: ServerSideEncryptionConfiguration
      description: |
        A structure that contains the configuration settings for server-side encryption. We only support symmetric keys. Do not use asymmetric or HMAC keys, or KMS aliases.
      value:
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: ClientRequestToken
      value: "{{ ClientRequestToken }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_voice_profile_domain"
    values={[
        { label: 'update_voice_profile_domain', value: 'update_voice_profile_domain' }
    ]}
>
<TabItem value="update_voice_profile_domain">

Updates the settings for the specified voice profile domain.

```sql
UPDATE aws.chime_sdk_voice.voice_profile_domains
SET 
Name = '{{ Name }}',
Description = '{{ Description }}'
WHERE 
voice_profile_domain_id = '{{ voice_profile_domain_id }}' --required
AND region = '{{ region }}' --required
RETURNING
voice_profile_domain;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_voice_profile_domain"
    values={[
        { label: 'delete_voice_profile_domain', value: 'delete_voice_profile_domain' }
    ]}
>
<TabItem value="delete_voice_profile_domain">

Deletes all voice profiles in the domain. WARNING: This action is not reversible.

```sql
DELETE FROM aws.chime_sdk_voice.voice_profile_domains
WHERE voice_profile_domain_id = '{{ voice_profile_domain_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
