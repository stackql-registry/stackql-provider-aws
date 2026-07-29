--- 
title: suggesters
hide_title: false
hide_table_of_contents: false
keywords:
  - suggesters
  - cloudsearch
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

Creates, updates, deletes, gets or lists a <code>suggesters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suggesters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.suggesters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_suggesters"
    values={[
        { label: 'describe_suggesters', value: 'describe_suggesters' }
    ]}
>
<TabItem value="describe_suggesters">

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
    <td><CopyableCode code="options" /></td>
    <td><code>string</code></td>
    <td>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: FuzzyMatching, SortExpression.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of domain configuration option.</td>
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
    <td><a href="#describe_suggesters"><CopyableCode code="describe_suggesters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-SuggesterNames"><code>SuggesterNames</code></a>, <a href="#parameter-Deployed"><code>Deployed</code></a></td>
    <td>Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_suggester"><CopyableCode code="delete_suggester" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-SuggesterName"><code>SuggesterName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#build_suggesters"><CopyableCode code="build_suggesters" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Indexes the search suggestions. For more information, see Configuring Suggesters in the Amazon CloudSearch Developer Guide.</td>
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
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-SuggesterName">
    <td><CopyableCode code="SuggesterName" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the suggester you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Deployed">
    <td><CopyableCode code="Deployed" /></td>
    <td><code>boolean</code></td>
    <td>Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.</td>
</tr>
<tr id="parameter-SuggesterNames">
    <td><CopyableCode code="SuggesterNames" /></td>
    <td><code>array</code></td>
    <td>The suggesters you want to describe.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_suggesters"
    values={[
        { label: 'describe_suggesters', value: 'describe_suggesters' }
    ]}
>
<TabItem value="describe_suggesters">

Gets the suggesters configured for a domain. A suggester enables you to display possible matches before users finish typing their queries. Can be limited to specific suggesters by name. By default, shows all suggesters and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.

```sql
SELECT
options,
status
FROM aws.cloudsearch.suggesters
WHERE DomainName = '{{ DomainName }}' -- required
AND region = '{{ region }}' -- required
AND SuggesterNames = '{{ SuggesterNames }}'
AND Deployed = '{{ Deployed }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_suggester"
    values={[
        { label: 'delete_suggester', value: 'delete_suggester' }
    ]}
>
<TabItem value="delete_suggester">

Deletes a suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.

```sql
DELETE FROM aws.cloudsearch.suggesters
WHERE DomainName = '{{ DomainName }}' --required
AND SuggesterName = '{{ SuggesterName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="build_suggesters"
    values={[
        { label: 'build_suggesters', value: 'build_suggesters' }
    ]}
>
<TabItem value="build_suggesters">

Indexes the search suggestions. For more information, see Configuring Suggesters in the Amazon CloudSearch Developer Guide.

```sql
EXEC aws.cloudsearch.suggesters.build_suggesters 
@DomainName='{{ DomainName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
