--- 
title: metadata_generation_runs
hide_title: false
hide_table_of_contents: false
keywords:
  - metadata_generation_runs
  - datazone
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

Creates, updates, deletes, gets or lists a <code>metadata_generation_runs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="metadata_generation_runs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.metadata_generation_runs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_metadata_generation_run"
    values={[
        { label: 'get_metadata_generation_run', value: 'get_metadata_generation_run' },
        { label: 'list_metadata_generation_runs', value: 'list_metadata_generation_runs' }
    ]}
>
<TabItem value="get_metadata_generation_run">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the metadata generation run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the metadata generation run was start.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who started the metadata generation run.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain the metadata generation run of which you want to get. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that owns the assets for which you're running metadata generation. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the metadata generation run. (SUBMITTED, IN_PROGRESS, CANCELED, SUCCEEDED, FAILED, PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The asset for which you're generating metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="typeStats" /></td>
    <td><code>array</code></td>
    <td>The type stats included in the metadata generation run output details.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of metadata generation run. (BUSINESS_DESCRIPTIONS, BUSINESS_NAMES, BUSINESS_GLOSSARY_ASSOCIATIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="types" /></td>
    <td><code>array</code></td>
    <td>The types of the metadata generation run.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_metadata_generation_runs">

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the metadata generation run. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the metadata generation run was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the metadata generation run.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the metadata generation run was created. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owningProjectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the project that owns the asset for which the metadata generation was ran. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the metadata generation run. (SUBMITTED, IN_PROGRESS, CANCELED, SUCCEEDED, FAILED, PARTIALLY_SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="target" /></td>
    <td><code>object</code></td>
    <td>The asset for which metadata was generated.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the metadata generation run. (BUSINESS_DESCRIPTIONS, BUSINESS_NAMES, BUSINESS_GLOSSARY_ASSOCIATIONS)</td>
</tr>
<tr>
    <td><CopyableCode code="types" /></td>
    <td><code>array</code></td>
    <td>The types of the metadata generation run.</td>
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
    <td><a href="#get_metadata_generation_run"><CopyableCode code="get_metadata_generation_run" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td>Gets a metadata generation run in Amazon DataZone. Prerequisites: Valid domain and run identifier. The metadata generation run must exist. User must have read access to the metadata run.</td>
</tr>
<tr>
    <td><a href="#list_metadata_generation_runs"><CopyableCode code="list_metadata_generation_runs" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-status"><code>status</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-targetIdentifier"><code>targetIdentifier</code></a></td>
    <td>Lists all metadata generation runs. Metadata generation runs represent automated processes that leverage AI/ML capabilities to create or enhance asset metadata at scale. This feature helps organizations maintain comprehensive and consistent metadata across large numbers of assets without manual intervention. It can automatically generate business descriptions, tags, and other metadata elements, significantly reducing the time and effort required for metadata management while improving consistency and completeness. Prerequisites: Valid domain identifier. User must have access to metadata generation runs in the domain.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain where you want to list metadata generation runs.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the metadata generation run.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of metadata generation runs to return in a single call to ListMetadataGenerationRuns. When the number of metadata generation runs to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of metadata generation runs is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of metadata generation runs, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListMetadataGenerationRuns to list the next set of revisions.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the metadata generation runs.</td>
</tr>
<tr id="parameter-targetIdentifier">
    <td><CopyableCode code="targetIdentifier" /></td>
    <td><code>string</code></td>
    <td>The target ID for which you want to list metadata generation runs.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the metadata generation runs.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_metadata_generation_run"
    values={[
        { label: 'get_metadata_generation_run', value: 'get_metadata_generation_run' },
        { label: 'list_metadata_generation_runs', value: 'list_metadata_generation_runs' }
    ]}
>
<TabItem value="get_metadata_generation_run">

Gets a metadata generation run in Amazon DataZone. Prerequisites: Valid domain and run identifier. The metadata generation run must exist. User must have read access to the metadata run.

```sql
SELECT
id,
createdAt,
createdBy,
domainId,
owningProjectId,
status,
target,
typeStats,
type_,
types
FROM aws.datazone.metadata_generation_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND type = '{{ type }}'
;
```
</TabItem>
<TabItem value="list_metadata_generation_runs">

Lists all metadata generation runs. Metadata generation runs represent automated processes that leverage AI/ML capabilities to create or enhance asset metadata at scale. This feature helps organizations maintain comprehensive and consistent metadata across large numbers of assets without manual intervention. It can automatically generate business descriptions, tags, and other metadata elements, significantly reducing the time and effort required for metadata management while improving consistency and completeness. Prerequisites: Valid domain identifier. User must have access to metadata generation runs in the domain.

```sql
SELECT
id,
createdAt,
createdBy,
domainId,
owningProjectId,
status,
target,
type_,
types
FROM aws.datazone.metadata_generation_runs
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND status = '{{ status }}'
AND type = '{{ type }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
AND targetIdentifier = '{{ targetIdentifier }}'
;
```
</TabItem>
</Tabs>
