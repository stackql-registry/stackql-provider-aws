--- 
title: archives
hide_title: false
hide_table_of_contents: false
keywords:
  - archives
  - events
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

Creates, updates, deletes, gets or lists an <code>archives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="archives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.events.archives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_archive"
    values={[
        { label: 'describe_archive', value: 'describe_archive' },
        { label: 'list_archives', value: 'list_archives' }
    ]}
>
<TabItem value="describe_archive">

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
    <td><CopyableCode code="ArchiveArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the archive. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:.+\/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ArchiveName" /></td>
    <td><code>string</code></td>
    <td>The name of the archive. (pattern: &lt;code&gt;&#91;\.\-_A-Za-z0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the archive was created.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The description of the archive. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EventCount" /></td>
    <td><code>integer (int64)</code></td>
    <td>The number of events in the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="EventPattern" /></td>
    <td><code>string</code></td>
    <td>The event pattern used to filter events sent to the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="EventSourceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the event source associated with the archive. (pattern: &lt;code&gt;^arn:aws(&#91;a-z&#93;|\-)*:events:(&#91;a-z&#93;|\d|\-)*:(&#91;0-9&#93;&#123;12&#125;)?:.+\/.+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the KMS customer managed key for EventBridge to use to encrypt this archive, if one has been specified. For more information, see Encrypting archives in the Amazon EventBridge User Guide. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_\-/:&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="RetentionDays" /></td>
    <td><code>integer</code></td>
    <td>The number of days to retain events for in the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="SizeBytes" /></td>
    <td><code>integer (int64)</code></td>
    <td>The size of the archive in bytes.</td>
</tr>
<tr>
    <td><CopyableCode code="State" /></td>
    <td><code>string</code></td>
    <td>The state of the archive. (ENABLED, DISABLED, CREATING, UPDATING, CREATE_FAILED, UPDATE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="StateReason" /></td>
    <td><code>string</code></td>
    <td>The reason that the archive is in the state. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_archives">

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
    <td><CopyableCode code="Archives" /></td>
    <td><code>array</code></td>
    <td>An array of Archive objects that include details about an archive.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token indicating there are more results available. If there are no more results, no token is included in the response. The value of nextToken is a unique pagination token for each page. To retrieve the next page of results, make the call again using the returned token. Keep all other arguments unchanged. Using an expired pagination token results in an HTTP 400 InvalidToken error.</td>
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
    <td><a href="#describe_archive"><CopyableCode code="describe_archive" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details about an archive.</td>
</tr>
<tr>
    <td><a href="#list_archives"><CopyableCode code="list_archives" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.</td>
</tr>
<tr>
    <td><a href="#create_archive"><CopyableCode code="create_archive" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArchiveName"><code>ArchiveName</code></a>, <a href="#parameter-EventSourceArn"><code>EventSourceArn</code></a></td>
    <td></td>
    <td>Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive. If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a customer managed key for any archives for the event bus as well. For more information, see Encrypting archives in the Amazon EventBridge User Guide.</td>
</tr>
<tr>
    <td><a href="#update_archive"><CopyableCode code="update_archive" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArchiveName"><code>ArchiveName</code></a></td>
    <td></td>
    <td>Updates the specified archive.</td>
</tr>
<tr>
    <td><a href="#delete_archive"><CopyableCode code="delete_archive" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified archive.</td>
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
    defaultValue="describe_archive"
    values={[
        { label: 'describe_archive', value: 'describe_archive' },
        { label: 'list_archives', value: 'list_archives' }
    ]}
>
<TabItem value="describe_archive">

Retrieves details about an archive.

```sql
SELECT
ArchiveArn,
ArchiveName,
CreationTime,
Description,
EventCount,
EventPattern,
EventSourceArn,
KmsKeyIdentifier,
RetentionDays,
SizeBytes,
State,
StateReason
FROM aws.events.archives
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_archives">

Lists your archives. You can either list all the archives or you can provide a prefix to match to the archive names. Filter parameters are exclusive.

```sql
SELECT
Archives,
NextToken
FROM aws.events.archives
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_archive"
    values={[
        { label: 'create_archive', value: 'create_archive' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_archive">

Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive. If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a customer managed key for any archives for the event bus as well. For more information, see Encrypting archives in the Amazon EventBridge User Guide.

```sql
INSERT INTO aws.events.archives (
ArchiveName,
EventSourceArn,
Description,
EventPattern,
RetentionDays,
KmsKeyIdentifier,
region
)
SELECT 
'{{ ArchiveName }}' /* required */,
'{{ EventSourceArn }}' /* required */,
'{{ Description }}',
'{{ EventPattern }}',
{{ RetentionDays }},
'{{ KmsKeyIdentifier }}',
'{{ region }}'
RETURNING
ArchiveArn,
CreationTime,
State,
StateReason
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: archives
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the archives resource.
    - name: ArchiveName
      value: "{{ ArchiveName }}"
      description: |
        The name for the archive to create.
    - name: EventSourceArn
      value: "{{ EventSourceArn }}"
      description: |
        The ARN of the event bus that sends events to the archive.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the archive.
    - name: EventPattern
      value: "{{ EventPattern }}"
      description: |
        An event pattern to use to filter events sent to the archive.
    - name: RetentionDays
      value: {{ RetentionDays }}
      description: |
        The number of days to retain events for. Default value is 0. If set to 0, events are retained indefinitely
    - name: KmsKeyIdentifier
      value: "{{ KmsKeyIdentifier }}"
      description: |
        The identifier of the KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this archive. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN. If you do not specify a customer managed key identifier, EventBridge uses an Amazon Web Services owned key to encrypt the archive. For more information, see Identify and view keys in the Key Management Service Developer Guide. If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a customer managed key for any archives for the event bus as well. For more information, see Encrypting archives in the Amazon EventBridge User Guide.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_archive"
    values={[
        { label: 'update_archive', value: 'update_archive' }
    ]}
>
<TabItem value="update_archive">

Updates the specified archive.

```sql
UPDATE aws.events.archives
SET 
ArchiveName = '{{ ArchiveName }}',
Description = '{{ Description }}',
EventPattern = '{{ EventPattern }}',
RetentionDays = {{ RetentionDays }},
KmsKeyIdentifier = '{{ KmsKeyIdentifier }}'
WHERE 
region = '{{ region }}' --required
AND ArchiveName = '{{ ArchiveName }}' --required
RETURNING
ArchiveArn,
CreationTime,
State,
StateReason;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_archive"
    values={[
        { label: 'delete_archive', value: 'delete_archive' }
    ]}
>
<TabItem value="delete_archive">

Deletes the specified archive.

```sql
DELETE FROM aws.events.archives
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
