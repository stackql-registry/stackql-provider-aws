--- 
title: analysis_schemes
hide_title: false
hide_table_of_contents: false
keywords:
  - analysis_schemes
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

Creates, updates, deletes, gets or lists an <code>analysis_schemes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="analysis_schemes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.analysis_schemes" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_analysis_schemes"
    values={[
        { label: 'describe_analysis_schemes', value: 'describe_analysis_schemes' }
    ]}
>
<TabItem value="describe_analysis_schemes">

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
    <td>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: Synonyms, Stopwords, StemmingDictionary, JapaneseTokenizationDictionary and AlgorithmicStemming.</td>
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
    <td><a href="#describe_analysis_schemes"><CopyableCode code="describe_analysis_schemes" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-AnalysisSchemeNames"><code>AnalysisSchemeNames</code></a>, <a href="#parameter-Deployed"><code>Deployed</code></a></td>
    <td>Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a text field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_analysis_scheme"><CopyableCode code="delete_analysis_scheme" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-AnalysisSchemeName"><code>AnalysisSchemeName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an analysis scheme. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.</td>
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
<tr id="parameter-AnalysisSchemeName">
    <td><CopyableCode code="AnalysisSchemeName" /></td>
    <td><code>string</code></td>
    <td>The name of the analysis scheme you want to delete.</td>
</tr>
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-AnalysisSchemeNames">
    <td><CopyableCode code="AnalysisSchemeNames" /></td>
    <td><code>array</code></td>
    <td>The analysis schemes you want to describe.</td>
</tr>
<tr id="parameter-Deployed">
    <td><CopyableCode code="Deployed" /></td>
    <td><code>boolean</code></td>
    <td>Whether to display the deployed configuration (true) or include any pending changes (false). Defaults to false.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_analysis_schemes"
    values={[
        { label: 'describe_analysis_schemes', value: 'describe_analysis_schemes' }
    ]}
>
<TabItem value="describe_analysis_schemes">

Gets the analysis schemes configured for a domain. An analysis scheme defines language-specific text processing options for a text field. Can be limited to specific analysis schemes by name. By default, shows all analysis schemes and includes any pending changes to the configuration. Set the Deployed option to true to show the active configuration and exclude pending changes. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.

```sql
SELECT
options,
status
FROM aws.cloudsearch.analysis_schemes
WHERE DomainName = '{{ DomainName }}' -- required
AND region = '{{ region }}' -- required
AND AnalysisSchemeNames = '{{ AnalysisSchemeNames }}'
AND Deployed = '{{ Deployed }}'
;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_analysis_scheme"
    values={[
        { label: 'delete_analysis_scheme', value: 'delete_analysis_scheme' }
    ]}
>
<TabItem value="delete_analysis_scheme">

Deletes an analysis scheme. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.

```sql
DELETE FROM aws.cloudsearch.analysis_schemes
WHERE DomainName = '{{ DomainName }}' --required
AND AnalysisSchemeName = '{{ AnalysisSchemeName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
