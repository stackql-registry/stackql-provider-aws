--- 
title: exports
hide_title: false
hide_table_of_contents: false
keywords:
  - exports
  - lexv2_models
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

Creates, updates, deletes, gets or lists an <code>exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_export"
    values={[
        { label: 'describe_export', value: 'describe_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="describe_export">

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
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the export was created.</td>
</tr>
<tr>
    <td><CopyableCode code="download_url" /></td>
    <td><code>string</code></td>
    <td>A pre-signed S3 URL that points to the bot or bot locale archive. The URL is only available for 5 minutes after calling the DescribeExport operation.</td>
</tr>
<tr>
    <td><CopyableCode code="export_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the described export. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="export_status" /></td>
    <td><code>string</code></td>
    <td>The status of the export. When the status is Complete the export archive file is available for download. (InProgress, Completed, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reasons" /></td>
    <td><code>array</code></td>
    <td>If the exportStatus is failed, contains one or more reasons why the export could not be completed.</td>
</tr>
<tr>
    <td><CopyableCode code="file_format" /></td>
    <td><code>string</code></td>
    <td>The file format used in the files that describe the resource. (LexJson, TSV, CSV)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last date and time that the export was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_specification" /></td>
    <td><code>object</code></td>
    <td>Provides information about the bot or bot locale that you want to export. You can specify the botExportSpecification or the botLocaleExportSpecification, but not both.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_exports">

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
    <td><CopyableCode code="bot_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned to the bot by Amazon Lex. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="bot_version" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that was exported. (pattern: &lt;code&gt;^(DRAFT|&#91;0-9&#93;+)$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="export_summaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the exports that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter. If there are more exports available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="locale_id" /></td>
    <td><code>string</code></td>
    <td>The locale specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListExports operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListExports operation request to get the next page of results.</td>
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
    <td><a href="#describe_export"><CopyableCode code="describe_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-export_id"><code>export_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific export.</td>
</tr>
<tr>
    <td><a href="#list_exports"><CopyableCode code="list_exports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.</td>
</tr>
<tr>
    <td><a href="#create_export"><CopyableCode code="create_export" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-resourceSpecification"><code>resourceSpecification</code></a>, <a href="#parameter-fileFormat"><code>fileFormat</code></a></td>
    <td></td>
    <td>Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot. You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For more information about exporting bots, and about the structure of the export archive, see Importing and exporting bots</td>
</tr>
<tr>
    <td><a href="#update_export"><CopyableCode code="update_export" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-export_id"><code>export_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the password used to protect an export zip archive. The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the DescribeExport operation.</td>
</tr>
<tr>
    <td><a href="#delete_export"><CopyableCode code="delete_export" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-export_id"><code>export_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a previous export and the associated files stored in an S3 bucket.</td>
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
<tr id="parameter-export_id">
    <td><CopyableCode code="export_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the export to delete.</td>
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
    defaultValue="describe_export"
    values={[
        { label: 'describe_export', value: 'describe_export' },
        { label: 'list_exports', value: 'list_exports' }
    ]}
>
<TabItem value="describe_export">

Gets information about a specific export.

```sql
SELECT
creation_date_time,
download_url,
export_id,
export_status,
failure_reasons,
file_format,
last_updated_date_time,
resource_specification
FROM aws.lexv2_models.exports
WHERE export_id = '{{ export_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_exports">

Lists the exports for a bot, bot locale, or custom vocabulary. Exports are kept in the list for 7 days.

```sql
SELECT
bot_id,
bot_version,
export_summaries,
locale_id,
next_token
FROM aws.lexv2_models.exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_export"
    values={[
        { label: 'create_export', value: 'create_export' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_export">

Creates a zip archive containing the contents of a bot or a bot locale. The archive contains a directory structure that contains JSON files that define the bot. You can create an archive that contains the complete definition of a bot, or you can specify that the archive contain only the definition of a single bot locale. For more information about exporting bots, and about the structure of the export archive, see Importing and exporting bots

```sql
INSERT INTO aws.lexv2_models.exports (
resourceSpecification,
fileFormat,
filePassword,
region
)
SELECT 
'{{ resourceSpecification }}' /* required */,
'{{ fileFormat }}' /* required */,
'{{ filePassword }}',
'{{ region }}'
RETURNING
creation_date_time,
export_id,
export_status,
file_format,
resource_specification
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: exports
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the exports resource.
    - name: resourceSpecification
      description: |
        Provides information about the bot or bot locale that you want to export. You can specify the botExportSpecification or the botLocaleExportSpecification, but not both.
      value:
        botExportSpecification:
          botId: "{{ botId }}"
          botVersion: "{{ botVersion }}"
        botLocaleExportSpecification:
          botId: "{{ botId }}"
          botVersion: "{{ botVersion }}"
          localeId: "{{ localeId }}"
        customVocabularyExportSpecification:
          botId: "{{ botId }}"
          botVersion: "{{ botVersion }}"
          localeId: "{{ localeId }}"
        testSetExportSpecification:
          testSetId: "{{ testSetId }}"
    - name: fileFormat
      value: "{{ fileFormat }}"
      valid_values: ['LexJson', 'TSV', 'CSV']
    - name: filePassword
      value: "{{ filePassword }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_export"
    values={[
        { label: 'update_export', value: 'update_export' }
    ]}
>
<TabItem value="update_export">

Updates the password used to protect an export zip archive. The password is not required. If you don't supply a password, Amazon Lex generates a zip file that is not protected by a password. This is the archive that is available at the pre-signed S3 URL provided by the DescribeExport operation.

```sql
UPDATE aws.lexv2_models.exports
SET 
filePassword = '{{ filePassword }}'
WHERE 
export_id = '{{ export_id }}' --required
AND region = '{{ region }}' --required
RETURNING
creation_date_time,
export_id,
export_status,
file_format,
last_updated_date_time,
resource_specification;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_export"
    values={[
        { label: 'delete_export', value: 'delete_export' }
    ]}
>
<TabItem value="delete_export">

Removes a previous export and the associated files stored in an S3 bucket.

```sql
DELETE FROM aws.lexv2_models.exports
WHERE export_id = '{{ export_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
