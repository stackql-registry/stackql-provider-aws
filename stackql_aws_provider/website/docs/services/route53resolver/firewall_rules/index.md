--- 
title: firewall_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_rules
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>firewall_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_rules" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_firewall_rules"
    values={[
        { label: 'list_firewall_rules', value: 'list_firewall_rules' }
    ]}
>
<TabItem value="list_firewall_rules">

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
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule: ALLOW - Permit the request to go through. Not available for DNS Firewall Advanced rules. ALERT - Permit the request to go through but send an alert to the logs. BLOCK - Disallow the request. If this is specified, additional handling details are provided in the rule's BlockResponse setting. (ALLOW, BLOCK, ALERT)</td>
</tr>
<tr>
    <td><CopyableCode code="block_override_dns_type" /></td>
    <td><code>string</code></td>
    <td>The DNS record's type. This determines the format of the record value that you provided in BlockOverrideDomain. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE. (CNAME)</td>
</tr>
<tr>
    <td><CopyableCode code="block_override_domain" /></td>
    <td><code>string</code></td>
    <td>The custom DNS record to send back in response to the query. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE.</td>
</tr>
<tr>
    <td><CopyableCode code="block_override_ttl" /></td>
    <td><code>integer</code></td>
    <td>The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE.</td>
</tr>
<tr>
    <td><CopyableCode code="block_response" /></td>
    <td><code>string</code></td>
    <td>The way that you want DNS Firewall to block the request. Used for the rule action setting BLOCK. NODATA - Respond indicating that the query was successful, but no response is available for it. NXDOMAIN - Respond indicating that the domain name that's in the query doesn't exist. OVERRIDE - Provide a custom override in the response. This option requires custom handling details in the rule's BlockOverride* settings. (NODATA, NXDOMAIN, OVERRIDE)</td>
</tr>
<tr>
    <td><CopyableCode code="confidence_threshold" /></td>
    <td><code>string</code></td>
    <td>The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence level values mean: LOW: Provides the highest detection rate for threats, but also increases false positives. MEDIUM: Provides a balance between detecting threats and false positives. HIGH: Detects only the most well corroborated threats with a low rate of false positives. (LOW, MEDIUM, HIGH)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the rule was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of executing the operation twice. This can be any unique string, for example, a timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_threat_protection" /></td>
    <td><code>string</code></td>
    <td>The type of the DNS Firewall Advanced rule. Valid values are: DGA: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks. DNS_TUNNELING: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client. DICTIONARY_DGA: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs. (DGA, DNS_TUNNELING, DICTIONARY_DGA)</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_domain_list_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain list that's used in the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_domain_redirection_action" /></td>
    <td><code>string</code></td>
    <td>How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME. INSPECT_REDIRECTION_DOMAIN: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list. TRUST_REDIRECTION_DOMAIN: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to the domain list. (INSPECT_REDIRECTION_DOMAIN, TRUST_REDIRECTION_DOMAIN)</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_rule_group_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the Firewall rule group of the rule.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_rule_type" /></td>
    <td><code>object</code></td>
    <td>The rule type configuration for the firewall rule. This is a tagged union — exactly one of its members will be populated. Possible members are: FirewallAdvancedContentCategory — an AWS-managed content category (for example, VIOLENCE_AND_HATE_SPEECH). FirewallAdvancedThreatCategory — an AWS-managed advanced threat category (for example, PHISHING). DnsThreatProtection — a built-in DNS Firewall Advanced threat detector (DGA, DNS_TUNNELING, or DICTIONARY_DGA). PartnerThreatProtection — a third-party threat feed delivered through AWS Marketplace. To enumerate the values supported in your account, call ListFirewallRuleTypes.</td>
</tr>
<tr>
    <td><CopyableCode code="firewall_threat_protection_id" /></td>
    <td><code>string</code></td>
    <td>ID of the DNS Firewall Advanced rule.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the rule was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the rule. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="priority" /></td>
    <td><code>integer</code></td>
    <td>The priority of the rule in the rule group. This value must be unique within the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting.</td>
</tr>
<tr>
    <td><CopyableCode code="qtype" /></td>
    <td><code>string</code></td>
    <td>The DNS query type you want the rule to evaluate. Allowed values are; A: Returns an IPv4 address. AAAA: Returns an Ipv6 address. CAA: Restricts CAs that can create SSL/TLS certifications for the domain. CNAME: Returns another domain name. DS: Record that identifies the DNSSEC signing key of a delegated zone. MX: Specifies mail servers. NAPTR: Regular-expression-based rewriting of domain names. NS: Authoritative name servers. PTR: Maps an IP address to a domain name. SOA: Start of authority record for the zone. SPF: Lists the servers authorized to send emails from a domain. SRV: Application specific values that identify servers. TXT: Verifies email senders and application-specific values. A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see List of DNS record types.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The lifecycle state of the firewall rule. Possible values: CREATING — DNS Firewall is provisioning the rule. Rules created with the PartnerThreatProtection rule type begin in this state while DNS Firewall verifies the calling account's AWS Marketplace entitlement. COMPLETE — The rule is provisioned and enforcing matches. CREATION_FAILED — Provisioning failed. StatusMessage contains a human-readable reason. A rule in this state is immutable: UpdateFirewallRule rejects the request, and the rule must be removed with DeleteFirewallRule. For rules that do not require asynchronous provisioning, this field may be absent.</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>An additional message about the rule's lifecycle state. Populated when Status is CREATION_FAILED to describe why provisioning failed.</td>
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
    <td><a href="#list_firewall_rules"><CopyableCode code="list_firewall_rules" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. A single call might return only a partial list of the rules. For information, see MaxResults. For rules that require asynchronous provisioning, the response includes Status (see FirewallRuleStatus) and, on failure, StatusMessage with the reason.</td>
</tr>
<tr>
    <td><a href="#create_firewall_rule"><CopyableCode code="create_firewall_rule" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a>, <a href="#parameter-FirewallRuleGroupId"><code>FirewallRuleGroupId</code></a></td>
    <td></td>
    <td>Creates a single DNS Firewall rule in the specified rule group. The rule can use any one of the following match sources, and the chosen source must be supplied through the matching request field — they are mutually exclusive: FirewallDomainListId — match a customer-managed or AWS-managed domain list. DnsThreatProtection — match a built-in DNS Firewall Advanced threat detector (DGA, DNS_TUNNELING, or DICTIONARY_DGA). FirewallRuleType — match one of the rule-type variants returned by ListFirewallRuleTypes: FirewallAdvancedContentCategory, FirewallAdvancedThreatCategory, DnsThreatProtection, or PartnerThreatProtection. The PartnerThreatProtection variant requires an active AWS Marketplace subscription to the named partner product. For rules that require asynchronous provisioning (today, the PartnerThreatProtection rule type), the rule's Status begins at CREATING and transitions to COMPLETE once the rule is provisioned and the marketplace entitlement is verified. If provisioning fails, Status becomes CREATION_FAILED and StatusMessage contains a human-readable reason; the rule is then immutable and must be removed with DeleteFirewallRule.</td>
</tr>
<tr>
    <td><a href="#update_firewall_rule"><CopyableCode code="update_firewall_rule" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-FirewallRuleGroupId"><code>FirewallRuleGroupId</code></a></td>
    <td></td>
    <td>Updates the specified firewall rule. The rule's FirewallRuleType, FirewallDomainListId, and top-level DnsThreatProtection match source cannot be changed after creation. Rules whose Status is CREATING or CREATION_FAILED cannot be updated; remove a failed rule with DeleteFirewallRule.</td>
</tr>
<tr>
    <td><a href="#delete_firewall_rule"><CopyableCode code="delete_firewall_rule" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified firewall rule. Identify the rule using either FirewallDomainListId (for domain-list and DNS Firewall Advanced rules) or FirewallThreatProtectionId (for partner-managed and DNS Firewall Advanced rules) — together with FirewallRuleGroupId. DeleteFirewallRule is the only operation that succeeds against a rule whose Status is CREATION_FAILED.</td>
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
    defaultValue="list_firewall_rules"
    values={[
        { label: 'list_firewall_rules', value: 'list_firewall_rules' }
    ]}
>
<TabItem value="list_firewall_rules">

Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC. A single call might return only a partial list of the rules. For information, see MaxResults. For rules that require asynchronous provisioning, the response includes Status (see FirewallRuleStatus) and, on failure, StatusMessage with the reason.

```sql
SELECT
action,
block_override_dns_type,
block_override_domain,
block_override_ttl,
block_response,
confidence_threshold,
creation_time,
creator_request_id,
dns_threat_protection,
firewall_domain_list_id,
firewall_domain_redirection_action,
firewall_rule_group_id,
firewall_rule_type,
firewall_threat_protection_id,
modification_time,
name,
priority,
qtype,
status,
status_message
FROM aws.route53resolver.firewall_rules
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_firewall_rule"
    values={[
        { label: 'create_firewall_rule', value: 'create_firewall_rule' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_firewall_rule">

Creates a single DNS Firewall rule in the specified rule group. The rule can use any one of the following match sources, and the chosen source must be supplied through the matching request field — they are mutually exclusive: FirewallDomainListId — match a customer-managed or AWS-managed domain list. DnsThreatProtection — match a built-in DNS Firewall Advanced threat detector (DGA, DNS_TUNNELING, or DICTIONARY_DGA). FirewallRuleType — match one of the rule-type variants returned by ListFirewallRuleTypes: FirewallAdvancedContentCategory, FirewallAdvancedThreatCategory, DnsThreatProtection, or PartnerThreatProtection. The PartnerThreatProtection variant requires an active AWS Marketplace subscription to the named partner product. For rules that require asynchronous provisioning (today, the PartnerThreatProtection rule type), the rule's Status begins at CREATING and transitions to COMPLETE once the rule is provisioned and the marketplace entitlement is verified. If provisioning fails, Status becomes CREATION_FAILED and StatusMessage contains a human-readable reason; the rule is then immutable and must be removed with DeleteFirewallRule.

```sql
INSERT INTO aws.route53resolver.firewall_rules (
CreatorRequestId,
FirewallRuleGroupId,
FirewallDomainListId,
Priority,
Action,
BlockResponse,
BlockOverrideDomain,
BlockOverrideDnsType,
BlockOverrideTtl,
Name,
FirewallDomainRedirectionAction,
Qtype,
DnsThreatProtection,
ConfidenceThreshold,
FirewallRuleType,
region
)
SELECT 
'{{ CreatorRequestId }}' /* required */,
'{{ FirewallRuleGroupId }}' /* required */,
'{{ FirewallDomainListId }}',
{{ Priority }},
'{{ Action }}',
'{{ BlockResponse }}',
'{{ BlockOverrideDomain }}',
'{{ BlockOverrideDnsType }}',
{{ BlockOverrideTtl }},
'{{ Name }}',
'{{ FirewallDomainRedirectionAction }}',
'{{ Qtype }}',
'{{ DnsThreatProtection }}',
'{{ ConfidenceThreshold }}',
'{{ FirewallRuleType }}',
'{{ region }}'
RETURNING
firewall_rule
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_rules
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the firewall_rules resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows you to retry failed requests without the risk of running the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp.
    - name: FirewallRuleGroupId
      value: "{{ FirewallRuleGroupId }}"
      description: |
        The unique identifier of the firewall rule group where you want to create the rule.
    - name: FirewallDomainListId
      value: "{{ FirewallDomainListId }}"
      description: |
        The ID of the domain list that you want to use in the rule. Can't be used together with DnsThreatProtecton.
    - name: Priority
      value: {{ Priority }}
      description: |
        The setting that determines the processing order of the rule in the rule group. DNS Firewall processes the rules in a rule group by order of priority, starting from the lowest setting. You must specify a unique priority for each rule in a rule group. To make it easier to insert rules later, leave space between the numbers, for example, use 100, 200, and so on. You can change the priority setting for the rules in a rule group at any time.
    - name: Action
      value: "{{ Action }}"
      description: |
        The action that DNS Firewall should take on a DNS query when it matches one of the domains in the rule's domain list, or a threat in a DNS Firewall Advanced rule: ALLOW - Permit the request to go through. Not available for DNS Firewall Advanced rules. ALERT - Permit the request and send metrics and logs to Cloud Watch. BLOCK - Disallow the request. This option requires additional details in the rule's BlockResponse.
      valid_values: ['ALLOW', 'BLOCK', 'ALERT']
    - name: BlockResponse
      value: "{{ BlockResponse }}"
      description: |
        The way that you want DNS Firewall to block the request, used with the rule action setting BLOCK. NODATA - Respond indicating that the query was successful, but no response is available for it. NXDOMAIN - Respond indicating that the domain name that's in the query doesn't exist. OVERRIDE - Provide a custom override in the response. This option requires custom handling details in the rule's BlockOverride* settings. This setting is required if the rule action setting is BLOCK.
      valid_values: ['NODATA', 'NXDOMAIN', 'OVERRIDE']
    - name: BlockOverrideDomain
      value: "{{ BlockOverrideDomain }}"
      description: |
        The custom DNS record to send back in response to the query. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE. This setting is required if the BlockResponse setting is OVERRIDE.
    - name: BlockOverrideDnsType
      value: "{{ BlockOverrideDnsType }}"
      description: |
        The DNS record's type. This determines the format of the record value that you provided in BlockOverrideDomain. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE. This setting is required if the BlockResponse setting is OVERRIDE.
      valid_values: ['CNAME']
    - name: BlockOverrideTtl
      value: {{ BlockOverrideTtl }}
      description: |
        The recommended amount of time, in seconds, for the DNS resolver or web browser to cache the provided override record. Used for the rule action BLOCK with a BlockResponse setting of OVERRIDE. This setting is required if the BlockResponse setting is OVERRIDE.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name that lets you identify the rule in the rule group.
    - name: FirewallDomainRedirectionAction
      value: "{{ FirewallDomainRedirectionAction }}"
      description: |
        How you want the the rule to evaluate DNS redirection in the DNS redirection chain, such as CNAME or DNAME. INSPECT_REDIRECTION_DOMAIN: (Default) inspects all domains in the redirection chain. The individual domains in the redirection chain must be added to the domain list. TRUST_REDIRECTION_DOMAIN: Inspects only the first domain in the redirection chain. You don't need to add the subsequent domains in the domain in the redirection list to the domain list.
      valid_values: ['INSPECT_REDIRECTION_DOMAIN', 'TRUST_REDIRECTION_DOMAIN']
    - name: Qtype
      value: "{{ Qtype }}"
      description: |
        The DNS query type you want the rule to evaluate. Allowed values are; A: Returns an IPv4 address. AAAA: Returns an Ipv6 address. CAA: Restricts CAs that can create SSL/TLS certifications for the domain. CNAME: Returns another domain name. DS: Record that identifies the DNSSEC signing key of a delegated zone. MX: Specifies mail servers. NAPTR: Regular-expression-based rewriting of domain names. NS: Authoritative name servers. PTR: Maps an IP address to a domain name. SOA: Start of authority record for the zone. SPF: Lists the servers authorized to send emails from a domain. SRV: Application specific values that identify servers. TXT: Verifies email senders and application-specific values. A query type you define by using the DNS type ID, for example 28 for AAAA. The values must be defined as TYPENUMBER, where the NUMBER can be 1-65534, for example, TYPE28. For more information, see List of DNS record types.
    - name: DnsThreatProtection
      value: "{{ DnsThreatProtection }}"
      description: |
        The type of the DNS Firewall Advanced rule. This setting is mutually exclusive with FirewallDomainListId and FirewallRuleType. Valid values are: DGA: Domain generation algorithms detection. DGAs are used by attackers to generate a large number of domains to launch malware attacks. DNS_TUNNELING: DNS tunneling detection. DNS tunneling is used by attackers to exfiltrate data from the client by using the DNS tunnel without making a network connection to the client. DICTIONARY_DGA: Dictionary-based domain generation algorithms detection. Dictionary DGAs use wordlists to generate domains that appear more legitimate, making them harder to detect than traditional DGAs.
      valid_values: ['DGA', 'DNS_TUNNELING', 'DICTIONARY_DGA']
    - name: ConfidenceThreshold
      value: "{{ ConfidenceThreshold }}"
      description: |
        The confidence threshold for DNS Firewall Advanced. You must provide this value when you create a DNS Firewall Advanced rule. The confidence level values mean: LOW: Provides the highest detection rate for threats, but also increases false positives. MEDIUM: Provides a balance between detecting threats and false positives. HIGH: Detects only the most well corroborated threats with a low rate of false positives.
      valid_values: ['LOW', 'MEDIUM', 'HIGH']
    - name: FirewallRuleType
      description: |
        The rule type configuration for the firewall rule. This is a tagged union — set exactly one of its members. This setting is mutually exclusive with the top-level FirewallDomainListId and DnsThreatProtection fields. Use one of: FirewallAdvancedContentCategory — match an AWS-managed content category (for example, VIOLENCE_AND_HATE_SPEECH). FirewallAdvancedThreatCategory — match an AWS-managed advanced threat category (for example, PHISHING). DnsThreatProtection — match a built-in DNS Firewall Advanced threat detector (DGA, DNS_TUNNELING, or DICTIONARY_DGA). PartnerThreatProtection — match a third-party threat feed delivered through AWS Marketplace. The selected partner must be an active subscription on the calling account. To enumerate the values supported in your account, call ListFirewallRuleTypes.
      value:
        PartnerThreatProtection:
          Partner: "{{ Partner }}"
        FirewallAdvancedContentCategory:
          Category: "{{ Category }}"
        FirewallAdvancedThreatCategory:
          Category: "{{ Category }}"
        DnsThreatProtection:
          Value: "{{ Value }}"
          ConfidenceThreshold: "{{ ConfidenceThreshold }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_firewall_rule"
    values={[
        { label: 'update_firewall_rule', value: 'update_firewall_rule' }
    ]}
>
<TabItem value="update_firewall_rule">

Updates the specified firewall rule. The rule's FirewallRuleType, FirewallDomainListId, and top-level DnsThreatProtection match source cannot be changed after creation. Rules whose Status is CREATING or CREATION_FAILED cannot be updated; remove a failed rule with DeleteFirewallRule.

```sql
UPDATE aws.route53resolver.firewall_rules
SET 
FirewallRuleGroupId = '{{ FirewallRuleGroupId }}',
FirewallDomainListId = '{{ FirewallDomainListId }}',
FirewallThreatProtectionId = '{{ FirewallThreatProtectionId }}',
Priority = {{ Priority }},
Action = '{{ Action }}',
BlockResponse = '{{ BlockResponse }}',
BlockOverrideDomain = '{{ BlockOverrideDomain }}',
BlockOverrideDnsType = '{{ BlockOverrideDnsType }}',
BlockOverrideTtl = {{ BlockOverrideTtl }},
Name = '{{ Name }}',
FirewallDomainRedirectionAction = '{{ FirewallDomainRedirectionAction }}',
Qtype = '{{ Qtype }}',
DnsThreatProtection = '{{ DnsThreatProtection }}',
ConfidenceThreshold = '{{ ConfidenceThreshold }}',
FirewallRuleType = '{{ FirewallRuleType }}'
WHERE 
region = '{{ region }}' --required
AND FirewallRuleGroupId = '{{ FirewallRuleGroupId }}' --required
RETURNING
firewall_rule;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_firewall_rule"
    values={[
        { label: 'delete_firewall_rule', value: 'delete_firewall_rule' }
    ]}
>
<TabItem value="delete_firewall_rule">

Deletes the specified firewall rule. Identify the rule using either FirewallDomainListId (for domain-list and DNS Firewall Advanced rules) or FirewallThreatProtectionId (for partner-managed and DNS Firewall Advanced rules) — together with FirewallRuleGroupId. DeleteFirewallRule is the only operation that succeeds against a rule whose Status is CREATION_FAILED.

```sql
DELETE FROM aws.route53resolver.firewall_rules
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
