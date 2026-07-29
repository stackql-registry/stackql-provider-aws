--- 
title: domain_details
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_details
  - route53domains
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

Creates, updates, deletes, gets or lists a <code>domain_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53domains.domain_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_domain_detail"
    values={[
        { label: 'get_domain_detail', value: 'get_domain_detail' }
    ]}
>
<TabItem value="get_domain_detail">

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
    <td><CopyableCode code="abuse_contact_email" /></td>
    <td><code>string</code></td>
    <td>Email address to contact to report incorrect contact information for a domain, to report that the domain is being used to send spam, to report that someone is cybersquatting on a domain name, or report some other type of abuse.</td>
</tr>
<tr>
    <td><CopyableCode code="abuse_contact_phone" /></td>
    <td><code>string</code></td>
    <td>Phone number for reporting abuse.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_contact" /></td>
    <td><code>object</code></td>
    <td>Provides details about the domain administrative contact.</td>
</tr>
<tr>
    <td><CopyableCode code="admin_privacy" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether contact information is concealed from WHOIS queries. If the value is true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is false, WHOIS queries return the information that you entered for the admin contact.</td>
</tr>
<tr>
    <td><CopyableCode code="auto_renew" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the domain registration is set to renew automatically.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_contact" /></td>
    <td><code>object</code></td>
    <td>Provides details about the domain billing contact.</td>
</tr>
<tr>
    <td><CopyableCode code="billing_privacy" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether contact information is concealed from WHOIS queries. If the value is true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is false, WHOIS queries return the information that you entered for the billing contact.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the domain was created as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="dns_sec" /></td>
    <td><code>string</code></td>
    <td>Deprecated.</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_keys" /></td>
    <td><code>array</code></td>
    <td>A complex type that contains information about the DNSSEC configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The name of a domain.</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the registration for the domain is set to expire. The date and time is in Unix time format and Coordinated Universal time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="nameservers" /></td>
    <td><code>array</code></td>
    <td>The name servers of the domain.</td>
</tr>
<tr>
    <td><CopyableCode code="registrant_contact" /></td>
    <td><code>object</code></td>
    <td>Provides details about the domain registrant.</td>
</tr>
<tr>
    <td><CopyableCode code="registrant_privacy" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether contact information is concealed from WHOIS queries. If the value is true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is false, WHOIS queries return the information that you entered for the registrant contact (domain owner).</td>
</tr>
<tr>
    <td><CopyableCode code="registrar_name" /></td>
    <td><code>string</code></td>
    <td>Name of the registrar of the domain as identified in the registry.</td>
</tr>
<tr>
    <td><CopyableCode code="registrar_url" /></td>
    <td><code>string</code></td>
    <td>Web address of the registrar.</td>
</tr>
<tr>
    <td><CopyableCode code="registry_domain_id" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="reseller" /></td>
    <td><code>string</code></td>
    <td>Reserved for future use.</td>
</tr>
<tr>
    <td><CopyableCode code="status_list" /></td>
    <td><code>array</code></td>
    <td>An array of domain name status codes, also known as Extensible Provisioning Protocol (EPP) status codes. ICANN, the organization that maintains a central database of domain names, has developed a set of domain name status codes that tell you the status of a variety of operations on a domain name, for example, registering a domain name, transferring a domain name to another registrar, renewing the registration for a domain name, and so on. All registrars use this same set of status codes. For a current list of domain name status codes and an explanation of what each code means, go to the ICANN website and search for epp status codes. (Search on the ICANN website; web searches sometimes return an old version of the document.)</td>
</tr>
<tr>
    <td><CopyableCode code="tech_contact" /></td>
    <td><code>object</code></td>
    <td>Provides details about the domain technical contact.</td>
</tr>
<tr>
    <td><CopyableCode code="tech_privacy" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether contact information is concealed from WHOIS queries. If the value is true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If the value is false, WHOIS queries return the information that you entered for the technical contact.</td>
</tr>
<tr>
    <td><CopyableCode code="updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last updated date of the domain as found in the response to a WHOIS query. The date and time is in Unix time format and Coordinated Universal time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="who_is_server" /></td>
    <td><code>string</code></td>
    <td>The fully qualified name of the WHOIS server that can answer the WHOIS query for the domain.</td>
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
    <td><a href="#get_domain_detail"><CopyableCode code="get_domain_detail" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.</td>
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
    defaultValue="get_domain_detail"
    values={[
        { label: 'get_domain_detail', value: 'get_domain_detail' }
    ]}
>
<TabItem value="get_domain_detail">

This operation returns detailed information about a specified domain that is associated with the current Amazon Web Services account. Contact information for the domain is also returned as part of the output.

```sql
SELECT
abuse_contact_email,
abuse_contact_phone,
admin_contact,
admin_privacy,
auto_renew,
billing_contact,
billing_privacy,
creation_date,
dns_sec,
dnssec_keys,
domain_name,
expiration_date,
nameservers,
registrant_contact,
registrant_privacy,
registrar_name,
registrar_url,
registry_domain_id,
reseller,
status_list,
tech_contact,
tech_privacy,
updated_date,
who_is_server
FROM aws.route53domains.domain_details
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
