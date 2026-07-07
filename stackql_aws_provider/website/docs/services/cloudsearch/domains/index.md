--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearch.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_domains"
    values={[
        { label: 'describe_domains', value: 'describe_domains' }
    ]}
>
<TabItem value="describe_domains">

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
    <td><CopyableCode code="ARN" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the search domain. See Identifiers for IAM Entities in Using AWS Identity and Access Management for more information.</td>
</tr>
<tr>
    <td><CopyableCode code="Created" /></td>
    <td><code>boolean</code></td>
    <td>True if the search domain is created. It can take several minutes to initialize a domain when CreateDomain is called. Newly created search domains are returned from DescribeDomains with a false value for Created until domain creation is complete.</td>
</tr>
<tr>
    <td><CopyableCode code="Deleted" /></td>
    <td><code>boolean</code></td>
    <td>True if the search domain has been deleted. The system must clean up resources dedicated to the search domain when DeleteDomain is called. Newly deleted search domains are returned from DescribeDomains with a true value for IsDeleted for several minutes until resource cleanup is complete.</td>
</tr>
<tr>
    <td><CopyableCode code="DocService" /></td>
    <td><code>string</code></td>
    <td>The service endpoint for updating documents in a search domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainId" /></td>
    <td><code>string</code></td>
    <td>An internally generated unique identifier for a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</td>
</tr>
<tr>
    <td><CopyableCode code="Limits" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="Processing" /></td>
    <td><code>boolean</code></td>
    <td>True if processing is being done to activate the current domain configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="RequiresIndexDocuments" /></td>
    <td><code>boolean</code></td>
    <td>True if IndexDocuments needs to be called to activate the current domain configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchInstanceCount" /></td>
    <td><code>integer</code></td>
    <td>The number of search instances that are available to process search requests.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchInstanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type that is being used to process search requests.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchPartitionCount" /></td>
    <td><code>integer</code></td>
    <td>The number of partitions across which the search index is spread.</td>
</tr>
<tr>
    <td><CopyableCode code="SearchService" /></td>
    <td><code>string</code></td>
    <td>The service endpoint for requesting search results from a search domain.</td>
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
    <td><a href="#describe_domains"><CopyableCode code="describe_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-DomainNames"><code>DomainNames</code></a></td>
    <td>Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a matchall request to your domain's search endpoint: q=matchall&amp;q.parser=structured&amp;size=0. For more information, see Getting Information about a Search Domain in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#create_domain"><CopyableCode code="create_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new search domain. For more information, see Creating a Search Domain in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see Deleting a Search Domain in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#define_analysis_scheme"><CopyableCode code="define_analysis_scheme" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-AnalysisScheme"><code>AnalysisScheme</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#define_expression"><CopyableCode code="define_expression" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-Expression"><code>Expression</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures an Expression for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#define_index_field"><CopyableCode code="define_index_field" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-IndexField"><code>IndexField</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures an IndexField for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the IndexFieldType. If the field exists, the new configuration replaces the old one. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#define_suggester"><CopyableCode code="define_suggester" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-Suggester"><code>Suggester</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.</td>
</tr>
<tr>
    <td><a href="#index_documents"><CopyableCode code="index_documents" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose OptionStatus is RequiresIndexDocuments.</td>
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
<tr id="parameter-AnalysisScheme">
    <td><CopyableCode code="AnalysisScheme" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr id="parameter-DomainName">
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-Expression">
    <td><CopyableCode code="Expression" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr id="parameter-IndexField">
    <td><CopyableCode code="IndexField" /></td>
    <td><code>object</code></td>
    <td>The index field and field options you want to configure.</td>
</tr>
<tr id="parameter-Suggester">
    <td><CopyableCode code="Suggester" /></td>
    <td><code>object</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-DomainNames">
    <td><CopyableCode code="DomainNames" /></td>
    <td><code>array</code></td>
    <td>The names of the domains you want to include in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_domains"
    values={[
        { label: 'describe_domains', value: 'describe_domains' }
    ]}
>
<TabItem value="describe_domains">

Gets information about the search domains owned by this account. Can be limited to specific domains. Shows all domains by default. To get the number of searchable documents in a domain, use the console or submit a matchall request to your domain's search endpoint: q=matchall&amp;q.parser=structured&amp;size=0. For more information, see Getting Information about a Search Domain in the Amazon CloudSearch Developer Guide.

```sql
SELECT
ARN,
Created,
Deleted,
DocService,
DomainId,
DomainName,
Limits,
Processing,
RequiresIndexDocuments,
SearchInstanceCount,
SearchInstanceType,
SearchPartitionCount,
SearchService
FROM aws.cloudsearch.domains
WHERE region = '{{ region }}' -- required
AND DomainNames = '{{ DomainNames }}'
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

Creates a new search domain. For more information, see Creating a Search Domain in the Amazon CloudSearch Developer Guide.

```sql
INSERT INTO aws.cloudsearch.domains (
DomainName,
region
)
SELECT 
'{{ DomainName }}',
'{{ region }}'
RETURNING
ARN,
Created,
Deleted,
DocService,
DomainId,
DomainName,
Limits,
Processing,
RequiresIndexDocuments,
SearchInstanceCount,
SearchInstanceType,
SearchPartitionCount,
SearchService
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: DomainName
      value: "{{ DomainName }}"
      description: Required parameter for the domains resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
`}</CodeBlock>

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

Permanently deletes a search domain and all of its data. Once a domain has been deleted, it cannot be recovered. For more information, see Deleting a Search Domain in the Amazon CloudSearch Developer Guide.

```sql
DELETE FROM aws.cloudsearch.domains
WHERE DomainName = '{{ DomainName }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="define_analysis_scheme"
    values={[
        { label: 'define_analysis_scheme', value: 'define_analysis_scheme' },
        { label: 'define_expression', value: 'define_expression' },
        { label: 'define_index_field', value: 'define_index_field' },
        { label: 'define_suggester', value: 'define_suggester' },
        { label: 'index_documents', value: 'index_documents' }
    ]}
>
<TabItem value="define_analysis_scheme">

Configures an analysis scheme that can be applied to a text or text-array field to define language-specific text processing options. For more information, see Configuring Analysis Schemes in the Amazon CloudSearch Developer Guide.

```sql
EXEC aws.cloudsearch.domains.define_analysis_scheme 
@DomainName='{{ DomainName }}' --required, 
@AnalysisScheme='{{ AnalysisScheme }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="define_expression">

Configures an Expression for the search domain. Used to create new expressions and modify existing ones. If the expression exists, the new configuration replaces the old one. For more information, see Configuring Expressions in the Amazon CloudSearch Developer Guide.

```sql
EXEC aws.cloudsearch.domains.define_expression 
@DomainName='{{ DomainName }}' --required, 
@Expression='{{ Expression }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="define_index_field">

Configures an IndexField for the search domain. Used to create new fields and modify existing ones. You must specify the name of the domain you are configuring and an index field configuration. The index field configuration specifies a unique name, the index field type, and the options you want to configure for the field. The options you can specify depend on the IndexFieldType. If the field exists, the new configuration replaces the old one. For more information, see Configuring Index Fields in the Amazon CloudSearch Developer Guide.

```sql
EXEC aws.cloudsearch.domains.define_index_field 
@DomainName='{{ DomainName }}' --required, 
@IndexField='{{ IndexField }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="define_suggester">

Configures a suggester for a domain. A suggester enables you to display possible matches before users finish typing their queries. When you configure a suggester, you must specify the name of the text field you want to search for possible matches and a unique name for the suggester. For more information, see Getting Search Suggestions in the Amazon CloudSearch Developer Guide.

```sql
EXEC aws.cloudsearch.domains.define_suggester 
@DomainName='{{ DomainName }}' --required, 
@Suggester='{{ Suggester }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
<TabItem value="index_documents">

Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose OptionStatus is RequiresIndexDocuments.

```sql
EXEC aws.cloudsearch.domains.index_documents 
@DomainName='{{ DomainName }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
