--- 
title: suggests
hide_title: false
hide_table_of_contents: false
keywords:
  - suggests
  - cloudsearchdomain
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

Creates, updates, deletes, gets or lists a <code>suggests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="suggests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudsearchdomain.suggests" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#suggest"><CopyableCode code="suggest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-q"><code>q</code></a>, <a href="#parameter-suggester"><code>suggester</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-size"><code>size</code></a></td>
    <td>Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. For more information about configuring suggesters and retrieving suggestions, see Getting Suggestions in the Amazon CloudSearch Developer Guide. The endpoint for submitting Suggest requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service DescribeDomains action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console.</td>
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
<tr id="parameter-q">
    <td><CopyableCode code="q" /></td>
    <td><code>string</code></td>
    <td>Specifies the string for which you want to get suggestions.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-suggester">
    <td><CopyableCode code="suggester" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the suggester to use to find suggested matches.</td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer (int64)</code></td>
    <td>Specifies the maximum number of suggestions to return.</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="suggest"
    values={[
        { label: 'suggest', value: 'suggest' }
    ]}
>
<TabItem value="suggest">

Retrieves autocomplete suggestions for a partial query string. You can use suggestions enable you to display likely matches before users finish typing. In Amazon CloudSearch, suggestions are based on the contents of a particular text field. When you request suggestions, Amazon CloudSearch finds all of the documents whose values in the suggester field start with the specified query string. The beginning of the field must match the query string to be considered a match. For more information about configuring suggesters and retrieving suggestions, see Getting Suggestions in the Amazon CloudSearch Developer Guide. The endpoint for submitting Suggest requests is domain-specific. You submit suggest requests to a domain's search endpoint. To get the search endpoint for your domain, use the Amazon CloudSearch configuration service DescribeDomains action. A domain's endpoints are also displayed on the domain dashboard in the Amazon CloudSearch console.

```sql
EXEC aws.cloudsearchdomain.suggests.suggest 
@q='{{ q }}' --required, 
@suggester='{{ suggester }}' --required, 
@region='{{ region }}' --required, 
@size='{{ size }}'
;
```
</TabItem>
</Tabs>
