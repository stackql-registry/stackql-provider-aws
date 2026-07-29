--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - voice_id
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.voice_id.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domain"
    values={[
        { label: 'describe_domain', value: 'describe_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="describe_domain">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the domain. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:voiceid.+:&#91;0-9&#93;&#123;12&#125;:domain/&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the domain. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the domain. (ACTIVE, PENDING, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The server-side encryption configuration containing the KMS key identifier you want Voice ID to use to encrypt your data.</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_update_details" /></td>
    <td><code>object</code></td>
    <td>Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain's data can only be accessed using the new KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was last update.</td>
</tr>
<tr>
    <td><CopyableCode code="watchlist_details" /></td>
    <td><code>object</code></td>
    <td>The watchlist details of a domain. Contains the default watchlist ID of the domain.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_domains">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the domain. (pattern: &lt;code&gt;^arn:aws(-&#91;^:&#93;+)?:voiceid.+:&#91;0-9&#93;&#123;12&#125;:domain/&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the domain. (pattern: &lt;code&gt;^(&#91;\p&#123;L&#125;\p&#123;Z&#125;\p&#123;N&#125;_.:/=+\-%@&#93;*)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;22&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_status" /></td>
    <td><code>string</code></td>
    <td>The current status of the domain. (ACTIVE, PENDING, SUSPENDED)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The client-provided name for the domain. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_configuration" /></td>
    <td><code>object</code></td>
    <td>The server-side encryption configuration containing the KMS key identifier you want Voice ID to use to encrypt your data.</td>
</tr>
<tr>
    <td><CopyableCode code="server_side_encryption_update_details" /></td>
    <td><code>object</code></td>
    <td>Details about the most recent server-side encryption configuration update. When the server-side encryption configuration is changed, dependency on the old KMS key is removed through an asynchronous process. When this update is complete, the domain's data can only be accessed using the new KMS key.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the domain was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="watchlist_details" /></td>
    <td><code>object</code></td>
    <td>Provides information about watchlistDetails and DefaultWatchlistID.</td>
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
    <td><a href="#describe_domain"><CopyableCode code="describe_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the specified domain.</td>
</tr>
<tr>
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all the domains in the Amazon Web Services account.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServerSideEncryptionConfiguration"><code>ServerSideEncryptionConfiguration</code></a></td>
    <td></td>
    <td>Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.</td>
</tr>
<tr>
    <td><a href="#update_domain"><CopyableCode code="update_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-ServerSideEncryptionConfiguration"><code>ServerSideEncryptionConfiguration</code></a></td>
    <td></td>
    <td>Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified domain from Voice ID.</td>
</tr>
<tr>
    <td><a href="#evaluate_session"><CopyableCode code="evaluate_session" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainId"><code>DomainId</code></a>, <a href="#parameter-SessionNameOrId"><code>SessionNameOrId</code></a></td>
    <td></td>
    <td>Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.</td>
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
    defaultValue="describe_domain"
    values={[
        { label: 'describe_domain', value: 'describe_domain' },
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="describe_domain">

Describes the specified domain.

```sql
SELECT
arn,
created_at,
description,
domain_id,
domain_status,
name,
server_side_encryption_configuration,
server_side_encryption_update_details,
updated_at,
watchlist_details
FROM aws.voice_id.domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_domains">

Lists all the domains in the Amazon Web Services account.

```sql
SELECT
arn,
created_at,
description,
domain_id,
domain_status,
name,
server_side_encryption_configuration,
server_side_encryption_update_details,
updated_at,
watchlist_details
FROM aws.voice_id.domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_domain"
    values={[
        { label: 'create_domain', value: 'create_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_domain">

Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.

```sql
INSERT INTO aws.voice_id.domains (
ClientToken,
Description,
Name,
ServerSideEncryptionConfiguration,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ Description }}',
'{{ Name }}',
'{{ ServerSideEncryptionConfiguration }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
domain
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see Making retries safe with idempotent APIs.
    - name: Description
      value: "{{ Description }}"
      description: |
        A brief description of this domain.
    - name: Name
      value: "{{ Name }}"
      description: |
        The name of the domain.
    - name: ServerSideEncryptionConfiguration
      description: |
        The configuration, containing the KMS key identifier, to be used by Voice ID for the server-side encryption of your data. Refer to Amazon Connect Voice ID encryption at rest for more details on how the KMS key is used.
      value:
        KmsKeyId: "{{ KmsKeyId }}"
    - name: Tags
      description: |
        A list of tags you want added to the domain.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_domain"
    values={[
        { label: 'update_domain', value: 'update_domain' }
    ]}
>
<TabItem value="update_domain">

Updates the specified domain. This API has clobber behavior, and clears and replaces all attributes. If an optional field, such as 'Description' is not provided, it is removed from the domain.

```sql
UPDATE aws.voice_id.domains
SET 
Description = '{{ Description }}',
DomainId = '{{ DomainId }}',
Name = '{{ Name }}',
ServerSideEncryptionConfiguration = '{{ ServerSideEncryptionConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND DomainId = '{{ DomainId }}' --required
AND ServerSideEncryptionConfiguration = '{{ ServerSideEncryptionConfiguration }}' --required
RETURNING
domain;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_domain"
    values={[
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_domain">

Deletes the specified domain from Voice ID.

```sql
DELETE FROM aws.voice_id.domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="evaluate_session"
    values={[
        { label: 'evaluate_session', value: 'evaluate_session' }
    ]}
>
<TabItem value="evaluate_session">

Evaluates a specified session based on audio data accumulated during a streaming Amazon Connect Voice ID call.

```sql
EXEC aws.voice_id.domains.evaluate_session 
@region='{{ region }}' --required 
@@json=
'{
"DomainId": "{{ DomainId }}", 
"SessionNameOrId": "{{ SessionNameOrId }}"
}'
;
```
</TabItem>
</Tabs>
