--- 
title: archives
hide_title: false
hide_table_of_contents: false
keywords:
  - archives
  - mailmanager
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mailmanager.archives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_archive"
    values={[
        { label: 'get_archive', value: 'get_archive' },
        { label: 'list_archives', value: 'list_archives' }
    ]}
>
<TabItem value="get_archive">

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
    <td>The Amazon Resource Name (ARN) of the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="ArchiveId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="ArchiveName" /></td>
    <td><code>string</code></td>
    <td>The unique name assigned to the archive. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ArchiveState" /></td>
    <td><code>string</code></td>
    <td>The current state of the archive: ACTIVE – The archive is ready and available for use. PENDING_DELETION – The archive has been marked for deletion and will be permanently deleted in 30 days. No further modifications can be made in this state. (ACTIVE, PENDING_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="CreatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the archive was created.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS key used to encrypt the archive. (pattern: &lt;code&gt;arn:aws(|-cn|-us-gov|-eusc):kms:&#91;a-z0-9-&#93;&#123;1,20&#125;:&#91;0-9&#93;&#123;12&#125;:(key|alias)/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the archive was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="Retention" /></td>
    <td><code>object</code></td>
    <td>The retention period for emails in this archive.</td>
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
    <td><CopyableCode code="ArchiveId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the archive.</td>
</tr>
<tr>
    <td><CopyableCode code="ArchiveName" /></td>
    <td><code>string</code></td>
    <td>The unique name assigned to the archive. (pattern: &lt;code&gt;&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9_-&#93;*&#91;a-zA-Z0-9&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ArchiveState" /></td>
    <td><code>string</code></td>
    <td>The current state of the archive: ACTIVE – The archive is ready and available for use. PENDING_DELETION – The archive has been marked for deletion and will be permanently deleted in 30 days. No further modifications can be made in this state. (ACTIVE, PENDING_DELETION)</td>
</tr>
<tr>
    <td><CopyableCode code="LastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the archive was last updated.</td>
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
    <td><a href="#get_archive"><CopyableCode code="get_archive" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the full details and current state of a specified email archive.</td>
</tr>
<tr>
    <td><a href="#list_archives"><CopyableCode code="list_archives" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of all email archives in your account.</td>
</tr>
<tr>
    <td><a href="#create_archive"><CopyableCode code="create_archive" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArchiveName"><code>ArchiveName</code></a></td>
    <td></td>
    <td>Creates a new email archive resource for storing and retaining emails.</td>
</tr>
<tr>
    <td><a href="#update_archive"><CopyableCode code="update_archive" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArchiveId"><code>ArchiveId</code></a></td>
    <td></td>
    <td>Updates the attributes of an existing email archive.</td>
</tr>
<tr>
    <td><a href="#delete_archive"><CopyableCode code="delete_archive" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Initiates deletion of an email archive. This changes the archive state to pending deletion. In this state, no new emails can be added, and existing archived emails become inaccessible (search, export, download). The archive and all of its contents will be permanently deleted 30 days after entering the pending deletion state, regardless of the configured retention period.</td>
</tr>
<tr>
    <td><a href="#start_archive_export"><CopyableCode code="start_archive_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArchiveId"><code>ArchiveId</code></a>, <a href="#parameter-FromTimestamp"><code>FromTimestamp</code></a>, <a href="#parameter-ToTimestamp"><code>ToTimestamp</code></a>, <a href="#parameter-ExportDestinationConfiguration"><code>ExportDestinationConfiguration</code></a></td>
    <td></td>
    <td>Initiates an export of emails from the specified archive.</td>
</tr>
<tr>
    <td><a href="#start_archive_search"><CopyableCode code="start_archive_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ArchiveId"><code>ArchiveId</code></a>, <a href="#parameter-FromTimestamp"><code>FromTimestamp</code></a>, <a href="#parameter-ToTimestamp"><code>ToTimestamp</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td></td>
    <td>Initiates a search across emails in the specified archive.</td>
</tr>
<tr>
    <td><a href="#stop_archive_export"><CopyableCode code="stop_archive_export" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ExportId"><code>ExportId</code></a></td>
    <td></td>
    <td>Stops an in-progress export of emails from an archive.</td>
</tr>
<tr>
    <td><a href="#stop_archive_search"><CopyableCode code="stop_archive_search" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-SearchId"><code>SearchId</code></a></td>
    <td></td>
    <td>Stops an in-progress archive search job.</td>
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
    defaultValue="get_archive"
    values={[
        { label: 'get_archive', value: 'get_archive' },
        { label: 'list_archives', value: 'list_archives' }
    ]}
>
<TabItem value="get_archive">

Retrieves the full details and current state of a specified email archive.

```sql
SELECT
ArchiveArn,
ArchiveId,
ArchiveName,
ArchiveState,
CreatedTimestamp,
KmsKeyArn,
LastUpdatedTimestamp,
Retention
FROM aws.mailmanager.archives
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_archives">

Returns a list of all email archives in your account.

```sql
SELECT
ArchiveId,
ArchiveName,
ArchiveState,
LastUpdatedTimestamp
FROM aws.mailmanager.archives
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

Creates a new email archive resource for storing and retaining emails.

```sql
INSERT INTO aws.mailmanager.archives (
ClientToken,
ArchiveName,
Retention,
KmsKeyArn,
Tags,
region
)
SELECT 
'{{ ClientToken }}',
'{{ ArchiveName }}' /* required */,
'{{ Retention }}',
'{{ KmsKeyArn }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
ArchiveId
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
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique token Amazon SES uses to recognize retries of this request.
    - name: ArchiveName
      value: "{{ ArchiveName }}"
      description: |
        A unique name for the new archive.
    - name: Retention
      description: |
        The period for retaining emails in the archive before automatic deletion.
      value:
        RetentionPeriod: "{{ RetentionPeriod }}"
    - name: KmsKeyArn
      value: "{{ KmsKeyArn }}"
      description: |
        The Amazon Resource Name (ARN) of the KMS key for encrypting emails in the archive.
    - name: Tags
      description: |
        The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
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

Updates the attributes of an existing email archive.

```sql
UPDATE aws.mailmanager.archives
SET 
ArchiveId = '{{ ArchiveId }}',
ArchiveName = '{{ ArchiveName }}',
Retention = '{{ Retention }}'
WHERE 
region = '{{ region }}' --required
AND ArchiveId = '{{ ArchiveId }}' --required;
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

Initiates deletion of an email archive. This changes the archive state to pending deletion. In this state, no new emails can be added, and existing archived emails become inaccessible (search, export, download). The archive and all of its contents will be permanently deleted 30 days after entering the pending deletion state, regardless of the configured retention period.

```sql
DELETE FROM aws.mailmanager.archives
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_archive_export"
    values={[
        { label: 'start_archive_export', value: 'start_archive_export' },
        { label: 'start_archive_search', value: 'start_archive_search' },
        { label: 'stop_archive_export', value: 'stop_archive_export' },
        { label: 'stop_archive_search', value: 'stop_archive_search' }
    ]}
>
<TabItem value="start_archive_export">

Initiates an export of emails from the specified archive.

```sql
EXEC aws.mailmanager.archives.start_archive_export 
@region='{{ region }}' --required 
@@json=
'{
"ArchiveId": "{{ ArchiveId }}", 
"Filters": "{{ Filters }}", 
"FromTimestamp": "{{ FromTimestamp }}", 
"ToTimestamp": "{{ ToTimestamp }}", 
"MaxResults": {{ MaxResults }}, 
"ExportDestinationConfiguration": "{{ ExportDestinationConfiguration }}", 
"IncludeMetadata": {{ IncludeMetadata }}
}'
;
```
</TabItem>
<TabItem value="start_archive_search">

Initiates a search across emails in the specified archive.

```sql
EXEC aws.mailmanager.archives.start_archive_search 
@region='{{ region }}' --required 
@@json=
'{
"ArchiveId": "{{ ArchiveId }}", 
"Filters": "{{ Filters }}", 
"FromTimestamp": "{{ FromTimestamp }}", 
"ToTimestamp": "{{ ToTimestamp }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
<TabItem value="stop_archive_export">

Stops an in-progress export of emails from an archive.

```sql
EXEC aws.mailmanager.archives.stop_archive_export 
@region='{{ region }}' --required 
@@json=
'{
"ExportId": "{{ ExportId }}"
}'
;
```
</TabItem>
<TabItem value="stop_archive_search">

Stops an in-progress archive search job.

```sql
EXEC aws.mailmanager.archives.stop_archive_search 
@region='{{ region }}' --required 
@@json=
'{
"SearchId": "{{ SearchId }}"
}'
;
```
</TabItem>
</Tabs>
