--- 
title: imports
hide_title: false
hide_table_of_contents: false
keywords:
  - imports
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

Creates, updates, deletes, gets or lists an <code>imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lexv2_models.imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_import"
    values={[
        { label: 'describe_import', value: 'describe_import' },
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="describe_import">

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
    <td><CopyableCode code="creationDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the import was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failureReasons" /></td>
    <td><code>array</code></td>
    <td>If the importStatus field is Failed, this provides one or more reasons for the failure.</td>
</tr>
<tr>
    <td><CopyableCode code="importId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the described import. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="importStatus" /></td>
    <td><code>string</code></td>
    <td>The status of the import process. When the status is Completed the resource is imported and ready for use. (InProgress, Completed, Failed, Deleting)</td>
</tr>
<tr>
    <td><CopyableCode code="importedResourceId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier that Amazon Lex assigned to the resource created by the import. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z_&#93;)+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="importedResourceName" /></td>
    <td><code>string</code></td>
    <td>The name of the imported resource. (pattern: &lt;code&gt;^(&#91;0-9a-zA-Z&#93;&#91;_-&#93;?)&#123;1,100&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedDateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the import was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="mergeStrategy" /></td>
    <td><code>string</code></td>
    <td>The strategy used when there was a name conflict between the imported resource and an existing resource. When the merge strategy is FailOnConflict existing resources are not overwritten and the import fails. (Overwrite, FailOnConflict, Append)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceSpecification" /></td>
    <td><code>object</code></td>
    <td>The specifications of the imported bot, bot locale, or custom vocabulary.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_imports">

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
    <td><CopyableCode code="botId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier assigned by Amazon Lex to the bot. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="botVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the bot that was imported. It will always be DRAFT. (pattern: &lt;code&gt;^DRAFT$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="importSummaries" /></td>
    <td><code>array</code></td>
    <td>Summary information for the imports that meet the filter criteria specified in the request. The length of the list is specified in the maxResults parameter. If there are more imports available, the nextToken field contains a token to get the next page of results.</td>
</tr>
<tr>
    <td><CopyableCode code="localeId" /></td>
    <td><code>string</code></td>
    <td>The locale specified in the request.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token that indicates whether there are more results to return in a response to the ListImports operation. If the nextToken field is present, you send the contents as the nextToken parameter of a ListImports operation request to get the next page of results.</td>
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
    <td><a href="#describe_import"><CopyableCode code="describe_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-import_id"><code>import_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a specific import.</td>
</tr>
<tr>
    <td><a href="#list_imports"><CopyableCode code="list_imports" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.</td>
</tr>
<tr>
    <td><a href="#delete_import"><CopyableCode code="delete_import" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-import_id"><code>import_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a previous import and the associated file stored in an S3 bucket.</td>
</tr>
<tr>
    <td><a href="#start_import"><CopyableCode code="start_import" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-importId"><code>importId</code></a>, <a href="#parameter-resourceSpecification"><code>resourceSpecification</code></a>, <a href="#parameter-mergeStrategy"><code>mergeStrategy</code></a></td>
    <td></td>
    <td>Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.</td>
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
<tr id="parameter-import_id">
    <td><CopyableCode code="import_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the import to delete.</td>
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
    defaultValue="describe_import"
    values={[
        { label: 'describe_import', value: 'describe_import' },
        { label: 'list_imports', value: 'list_imports' }
    ]}
>
<TabItem value="describe_import">

Gets information about a specific import.

```sql
SELECT
creationDateTime,
failureReasons,
importId,
importStatus,
importedResourceId,
importedResourceName,
lastUpdatedDateTime,
mergeStrategy,
resourceSpecification
FROM aws.lexv2_models.imports
WHERE import_id = '{{ import_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_imports">

Lists the imports for a bot, bot locale, or custom vocabulary. Imports are kept in the list for 7 days.

```sql
SELECT
botId,
botVersion,
importSummaries,
localeId,
nextToken
FROM aws.lexv2_models.imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_import"
    values={[
        { label: 'delete_import', value: 'delete_import' }
    ]}
>
<TabItem value="delete_import">

Removes a previous import and the associated file stored in an S3 bucket.

```sql
DELETE FROM aws.lexv2_models.imports
WHERE import_id = '{{ import_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_import"
    values={[
        { label: 'start_import', value: 'start_import' }
    ]}
>
<TabItem value="start_import">

Starts importing a bot, bot locale, or custom vocabulary from a zip archive that you uploaded to an S3 bucket.

```sql
EXEC aws.lexv2_models.imports.start_import 
@region='{{ region }}' --required 
@@json=
'{
"importId": "{{ importId }}", 
"resourceSpecification": "{{ resourceSpecification }}", 
"mergeStrategy": "{{ mergeStrategy }}", 
"filePassword": "{{ filePassword }}"
}'
;
```
</TabItem>
</Tabs>
